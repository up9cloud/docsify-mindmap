import markmap from 'markmap'
import parseTxt from 'markmap/lib/parse.txtmap.js'
import transform from 'markmap/lib/transform.headings.js'
import transformMindmup from 'markmap/lib/transform.mindmup.js'

const id = 'mindmap'
const blockRe = /\n```mindmap([a-z- ]*)\n([\s\S]*?)\n```/g
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
    // case 'kityminder':
    // case 'json-kityminder':
    //   try {
    //     data = rawContent
    //     engine = 'kityminder'
    //   } catch (e) {}
    //   break
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
  const ignoreKey = '````md\n'
  let renderJobs = []
  hook.beforeEach(function (content) {
    renderJobs = []
    let prevIndex = 0
    let match
    let fixedContent = ''
    while (match = blockRe.exec(content)) { // eslint-disable-line no-cond-assign
      const startIndex = match.index + 1 // \n
      const endIndex = blockRe.lastIndex
      // const endIndex = match.index + match[0].length
      fixedContent += content.substring(prevIndex, startIndex)
      prevIndex = startIndex

      if (content.substring(startIndex - ignoreKey.length, startIndex) === ignoreKey) {
        fixedContent += content.substring(prevIndex, endIndex)
        prevIndex = endIndex
        continue
      }

      const dataType = match[1].substring(1).trim() || 'txtmap'
      const { data, engine } = parseContent(match[2], dataType)

      const randomId = `${id}-${engine}-${Math.random().toString().substring(2)}`
      switch (engine) {
        case 'markmap': {
          const o = countTree(data)
          if (o.height > 3) { // default d3 block height is 150, should be fine with 3 items
            const multi = 1 + Math.round(o.height / 6)
            let height = multi * 150
            if (multi > o.depth) {
              height = o.depth * 150
            }
            fixedContent += `<svg id="${randomId}" style="width:100%;height:${height}px"></svg>`
          } else {
            fixedContent += `<svg id="${randomId}" style="width:100%"></svg>`
          }
          renderJobs.push(function () {
            markmap(`svg#${randomId}`, data, config[id].markmap)
          })
          break
        }
        // case 'kityminder': {
        //   fixedContent += `<script id="${randomId}" type="application/kityminder" minder-data-type="json">${data}</script>`
        //   renderJobs.push(function () {
        //     new kityminder.Minder({ // eslint-disable-line no-new
        //       renderTo: `#${randomId}`
        //     })
        //   })
        //   break
        // }
        default:
          fixedContent += content.substring(prevIndex, endIndex)
      }
      prevIndex = endIndex
    }
    fixedContent += content.substring(prevIndex)
    return fixedContent
  })
  // hook.afterEach(function (html, next) {
  //   next(html)
  // })

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
