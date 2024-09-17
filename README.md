# docsify-mindmap

Mind map plugin for [docsify](https://github.com/docsifyjs/docsify).

## Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/vue.css">
  </head>
  <body>
    <!-- markmap is based on d3@3, so must load those files first. -->
    <script src="//unpkg.com/d3@3/dist/d3.min.js"></script>
    <script src="//unpkg.com/markmap@0.6.1/lib/d3-flextree.js"></script>
    <script src="//unpkg.com/markmap@0.6.1/lib/view.mindmap.js"></script>
    <link rel="stylesheet" href="//unpkg.com/markmap@0.6.1/style/view.mindmap.css">

    <div id="app"></div>
    <script>
      window.$docsify = {
        mindmap: {
          // https://github.com/dundalek/markmap
          markmap: {
            preset: 'colorful', // or default
            linkShape: 'diagonal' // or bracket
          }
        }
      }
    </script>
    <script src="//unpkg.com/docsify@4/lib/docsify.min.js"></script>
    <script src="//unpkg.com/docsify-mindmap/dist/docsify-mindmap.min.js"></script>
  </body>
</html>
```

````md
# Plain text

```mindmap
root
  topic1
    subtopic
  topic2
    subtopic
```
````

````md
# JSON tree format

```mindmap json-tree
{
  "name": "root",
  "children": [
    {
      "name": "topic1",
      "children": [{ "name": "subtopic" }]
    },
    {
      "name": "topic2",
      "children": [{ "name": "subtopic" }]
    }
  ]
}
```
````

> See [demo](http://up9cloud.github.io/docsify-mindmap) for more format

## Dev memo

```bash
npm i
npm run dev
```

## TODO

- [ ] Stop d3 resizing
- [ ] To find another light weight mindmap render engine
- [ ] Support markmap-lib
