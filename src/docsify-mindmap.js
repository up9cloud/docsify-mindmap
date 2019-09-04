import markmap from 'markmap'
// import markmap from 'markmaps/lib/view.mindmap.js'
import parseTxt from 'markmap/lib/parse.txtmap.js'
import transform from 'markmap/lib/transform.headings.js'
import transformMindmup from 'markmap/lib/transform.mindmup.js'

const tagRe = /\n```([a-z-]*)\n/g
const id = 'mindmap'
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
function install (hook, docsify) {
  let renderJobs = []
  hook.beforeEach(function (content) {
    renderJobs = []
    let prev = [0, 0]
    let isStart = true
    let lang = ''
    let match
    let fixedContent = ''
    while (match = tagRe.exec(content)) { // eslint-disable-line no-cond-assign
      const start = match.index + 1
      const end = tagRe.lastIndex
      if (isStart) {
        fixedContent += content.substring(prev[1], start)
        lang = match[1]
      } else {
        if (lang && lang.startsWith(id)) {
          let data = null
          let engine = null
          const raw = content.substring(prev[1], start - 1)
          const dataType = lang.substring(id.length + 1) || 'txt' // default
          const randomId = dataType + '-' + Math.random().toString().substring(2)
          switch (dataType) {
            // https://github.com/dundalek/markmap/blob/master/examples/browser/example.txtmap.js
            case 'txt':
            case 'txtmap':
              data = transform(parseTxt(raw))
              engine = 'markmap'
              break
            case 'json':
            case 'flare':
            case 'json-flare':
            case 'tree':
            case 'json-tree':
              try {
                data = JSON.parse(raw)
                engine = 'markmap'
              } catch (e) {}
              break
            case 'mup':
            case 'json-mup':
              try {
                data = transformMindmup(JSON.parse(raw))
                engine = 'markmap'
              } catch (e) {}
              break
            // TODO:
            // case 'kityminder':
            // case 'json-kityminder':
            //   try {
            //     data = raw
            //     engine = 'kityminder'
            //   } catch (e) {}
            //   break
            default:
          }
          switch (engine) {
            case 'markmap':
              const o = countTree(data)
              if (o.height > 3) { // default d3 block height is 150, should be fine with 3 items
                const multi = 1 + Math.round(o.height / 6)
                let height = multi * 150
                if (multi > o.depth) {
                  height = o.depth * 150
                }
                fixedContent += `<svg id="${randomId}" style="width:100%;height:${height}px"></svg>\n`
              } else {
                fixedContent += `<svg id="${randomId}" style="width:100%"></svg>\n`
              }
              renderJobs.push(function () {
                markmap(`svg#${randomId}`, data, docsify.config[id])
              })
              break
            // case 'kityminder':
            //   fixedContent += `<script id="${randomId}" type="application/kityminder" minder-data-type="json">${data}</script>`
            //   renderJobs.push(function () {
            //     new kityminder.Minder({ // eslint-disable-line no-new
            //       renderTo: `#${randomId}`
            //     })
            //   })
            //   break
            default:
              fixedContent += content.substring(prev[0], end)
          }
        } else {
          fixedContent += content.substring(prev[0], end)
        }
      }
      isStart = !isStart
      prev = [start, end]
    }
    fixedContent += content.substring(prev[1])
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
