import markmap from 'markmap'
import parseTxt from 'markmap/lib/parse.txtmap.js'
import transform from 'markmap/lib/transform.headings.js'
import transformMindmup from 'markmap/lib/transform.mindmup.js'

import 'kityminder-core/dist/kityminder.core.js'

// import { Transformer } from 'markmap-lib'
// import { fillTemplate } from 'markmap-render';
// const transformer = new Transformer()

const id = 'mindmap'
function parseContent(rawContent, dataType) {
  let data, engine
  switch (dataType) {
    // https://github.com/dundalek/markmap/blob/master/examples/browser/example.txtmap.js
    case 'txt':
    case 'txtmap':
      data = transform(parseTxt(rawContent))
      engine = 'markmap'
      break
    case 'json':
    case 'flare':
    case 'json-flare':
    case 'tree':
    case 'json-tree':
      try {
        data = JSON.parse(rawContent)
        engine = 'markmap'
      } catch (e) {}
      break
    case 'mup':
    case 'json-mup':
      try {
        data = transformMindmup(JSON.parse(rawContent))
        engine = 'markmap'
      } catch (e) {}
      break
    // TODO:
    case 'kityminder':
    case 'json-kityminder':
      data = rawContent
      engine = 'kityminder'
      break
    // case 'md': {
    //   try {
    //     const { root, features } = transformer.transform(markdown)
    //     data = root
    //     console.log(root, features)
    //     engine = 'markmap-lib'
    //   } catch (e) {}
    // }
  }
  return { data, engine }
}
function countTree (tree, { height = 0, depth = 0 } = {}) {
  depth++
  if (tree.hasOwnProperty('children') && tree.children && tree.children.length > 0) {
    let maxDepth = depth
    for (const node of tree.children) {
      let o = countTree(node, { height: 0, depth })
      height += o.height
      if (o.depth > maxDepth) {
        maxDepth = o.depth
      }
    }
    depth = maxDepth
  } else {
    height++
  }
  return { height, depth }
}
function install (hook, { config = {} } = {}) {
  if (!config[id]) {
    config[id] = {}
  }
  if (!config[id].markmap) {
    config[id].markmap = {}
  }
  // Backward compatible
  for (const k of [
    'preset',
    'linkShape'
  ]) {
    if (config[id][k]) {
      config[id].markmap[k] = config[id][k]
    }
  }
  if (!config.markdown) {
    config.markdown = {}
  }
  if (!config.markdown.renderer) {
    config.markdown.renderer = {}
  }
  let renderJobs = []
  const conflict =config.markdown.renderer.code
  config.markdown.renderer.code = function(code, lang) {
    const ll = lang.split(' ')
    const mainLang = ll[0]
    if (mainLang === id) {
      const dataType = ll[1] || 'txtmap'
      const { data, engine } = parseContent(code, dataType)
      switch (engine) {
        case 'markmap': {
          const randomId = `${id}-${engine}-${Math.random().toString().substring(2)}`
          const o = countTree(data)
          let html = ''
          if (o.height > 3) { // default d3 block height is 150, should be fine with 3 items
            const multi = 1 + Math.round(o.height / 6)
            let height = multi * 150
            if (multi > o.depth) {
              height = o.depth * 150
            }
            html = `<svg id="${randomId}" style="width:100%;min-height:${height}px"></svg>`
          } else {
            html = `<svg id="${randomId}" style="width:100%"></svg>`
          }
          renderJobs.push(function () {
            markmap(`svg#${randomId}`, data, config[id].markmap)
          })
          return html
        }
        case 'kityminder': {
          const randomId = `${id}-${engine}-${Math.random().toString().substring(2)}`
          renderJobs.push(function () {
            // new kityminder.Minder({ // eslint-disable-line no-new
            //   renderTo: `div#${randomId}`
            // })
            var km = new kityminder.Minder()
            km.setup(`#${randomId}`)
          })
          return `<script id="${randomId}" type="application/kityminder" minder-data-type="json">${data}</script>`
          // return `<div id="${randomId}"></div>`
        }
        // case 'markmap-lib': {
        //   const html = fillTemplate(data)
        //   return html
        // }
      }
    }
    if (conflict) {
      return conflict.apply(this, arguments)
    }
    return this.origin.code.apply(this, arguments);
  }
  hook.beforeEach(function (markdown) {
    renderJobs = []
    return markdown;
  })
  hook.doneEach(function () {
    for (const job of renderJobs) {
      job()
    }
  })
}
if (!window.$docsify) {
  window.$docsify = {}
}
window.$docsify.plugins = [].concat(install, window.$docsify.plugins)
