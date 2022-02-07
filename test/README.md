# Test

<!-- TOC depthFrom:2 -->

- [Not mindmap](#not-mindmap)
- [Unknown mindmap](#unknown-mindmap)
- [mindmap](#mindmap)
- [mindmap json-tree](#mindmap-json-tree)
- [mindmap json-mup](#mindmap-json-mup)
- [mindmap kityminder](#mindmap-kityminder)
- [mindmap json-kityminder](#mindmap-json-kityminder)

<!-- /TOC -->

## Not mindmap

```txt
a b c
```

## Unknown mindmap

```mindmap whatever
a b c
```

## mindmap

> Default is `txtmap`

https://github.com/dundalek/markmap/blob/master/examples/data/example.txtmap

````md
```mindmap
some
  example
    content
  for
  you
    to
    see
      the
    file
      structure
```
````

```mindmap txtmap
some
  example
    content
  for
  you
    to
    see
      the
    file
      structure
```

## mindmap json-tree

````md
```mindmap json-tree
{
  "name": "root",
  "children": [
    { "name": "hello" },
    { "name": "world" }
  ]
}
```
````

```mindmap json
{
  "name": "root",
  "children": [
    { "name": "hello" },
    { "name": "world" }
  ]
}
```

```mindmap flare
{
 "name": "flare",
 "children": [
  {
   "name": "analytics",
   "children": [
    {
     "name": "cluster",
     "children": [
      {"name": "AgglomerativeCluster", "size": 3938},
      {"name": "CommunityStructure", "size": 3812},
      {"name": "HierarchicalCluster", "size": 6714},
      {"name": "MergeEdge", "size": 743}
     ]
    },
    {
     "name": "graph",
     "children": [
      {"name": "BetweennessCentrality", "size": 3534},
      {"name": "LinkDistance", "size": 5731},
      {"name": "MaxFlowMinCut", "size": 7840},
      {"name": "ShortestPaths", "size": 5914},
      {"name": "SpanningTree", "size": 3416}
     ]
    },
    {
     "name": "optimization",
     "children": [
      {"name": "AspectRatioBanker", "size": 7074}
     ]
    }
   ]
  },
  {
   "name": "animate",
   "children": [
    {"name": "Easing", "size": 17010},
    {"name": "FunctionSequence", "size": 5842},
    {
     "name": "interpolate",
     "children": [
      {"name": "ArrayInterpolator", "size": 1983},
      {"name": "ColorInterpolator", "size": 2047},
      {"name": "DateInterpolator", "size": 1375},
      {"name": "Interpolator", "size": 8746},
      {"name": "MatrixInterpolator", "size": 2202},
      {"name": "NumberInterpolator", "size": 1382},
      {"name": "ObjectInterpolator", "size": 1629},
      {"name": "PointInterpolator", "size": 1675},
      {"name": "RectangleInterpolator", "size": 2042}
     ]
    },
    {"name": "ISchedulable", "size": 1041},
    {"name": "Parallel", "size": 5176},
    {"name": "Pause", "size": 449},
    {"name": "Scheduler", "size": 5593},
    {"name": "Sequence", "size": 5534},
    {"name": "Transition", "size": 9201},
    {"name": "Transitioner", "size": 19975},
    {"name": "TransitionEvent", "size": 1116},
    {"name": "Tween", "size": 6006}
   ]
  },
  {
   "name": "data",
   "children": [
    {
     "name": "converters",
     "children": [
      {"name": "Converters", "size": 721},
      {"name": "DelimitedTextConverter", "size": 4294},
      {"name": "GraphMLConverter", "size": 9800},
      {"name": "IDataConverter", "size": 1314},
      {"name": "JSONConverter", "size": 2220}
     ]
    },
    {"name": "DataField", "size": 1759},
    {"name": "DataSchema", "size": 2165},
    {"name": "DataSet", "size": 586},
    {"name": "DataSource", "size": 3331},
    {"name": "DataTable", "size": 772},
    {"name": "DataUtil", "size": 3322}
   ]
  },
  {
   "name": "display",
   "children": [
    {"name": "DirtySprite", "size": 8833},
    {"name": "LineSprite", "size": 1732},
    {"name": "RectSprite", "size": 3623},
    {"name": "TextSprite", "size": 10066}
   ]
  },
  {
   "name": "flex",
   "children": [
    {"name": "FlareVis", "size": 4116}
   ]
  },
  {
   "name": "physics",
   "children": [
    {"name": "DragForce", "size": 1082},
    {"name": "GravityForce", "size": 1336},
    {"name": "IForce", "size": 319},
    {"name": "NBodyForce", "size": 10498},
    {"name": "Particle", "size": 2822},
    {"name": "Simulation", "size": 9983},
    {"name": "Spring", "size": 2213},
    {"name": "SpringForce", "size": 1681}
   ]
  },
  {
   "name": "query",
   "children": [
    {"name": "AggregateExpression", "size": 1616},
    {"name": "And", "size": 1027},
    {"name": "Arithmetic", "size": 3891},
    {"name": "Average", "size": 891},
    {"name": "BinaryExpression", "size": 2893},
    {"name": "Comparison", "size": 5103},
    {"name": "CompositeExpression", "size": 3677},
    {"name": "Count", "size": 781},
    {"name": "DateUtil", "size": 4141},
    {"name": "Distinct", "size": 933},
    {"name": "Expression", "size": 5130},
    {"name": "ExpressionIterator", "size": 3617},
    {"name": "Fn", "size": 3240},
    {"name": "If", "size": 2732},
    {"name": "IsA", "size": 2039},
    {"name": "Literal", "size": 1214},
    {"name": "Match", "size": 3748},
    {"name": "Maximum", "size": 843},
    {
     "name": "methods",
     "children": [
      {"name": "add", "size": 593},
      {"name": "and", "size": 330},
      {"name": "average", "size": 287},
      {"name": "count", "size": 277},
      {"name": "distinct", "size": 292},
      {"name": "div", "size": 595},
      {"name": "eq", "size": 594},
      {"name": "fn", "size": 460},
      {"name": "gt", "size": 603},
      {"name": "gte", "size": 625},
      {"name": "iff", "size": 748},
      {"name": "isa", "size": 461},
      {"name": "lt", "size": 597},
      {"name": "lte", "size": 619},
      {"name": "max", "size": 283},
      {"name": "min", "size": 283},
      {"name": "mod", "size": 591},
      {"name": "mul", "size": 603},
      {"name": "neq", "size": 599},
      {"name": "not", "size": 386},
      {"name": "or", "size": 323},
      {"name": "orderby", "size": 307},
      {"name": "range", "size": 772},
      {"name": "select", "size": 296},
      {"name": "stddev", "size": 363},
      {"name": "sub", "size": 600},
      {"name": "sum", "size": 280},
      {"name": "update", "size": 307},
      {"name": "variance", "size": 335},
      {"name": "where", "size": 299},
      {"name": "xor", "size": 354},
      {"name": "_", "size": 264}
     ]
    },
    {"name": "Minimum", "size": 843},
    {"name": "Not", "size": 1554},
    {"name": "Or", "size": 970},
    {"name": "Query", "size": 13896},
    {"name": "Range", "size": 1594},
    {"name": "StringUtil", "size": 4130},
    {"name": "Sum", "size": 791},
    {"name": "Variable", "size": 1124},
    {"name": "Variance", "size": 1876},
    {"name": "Xor", "size": 1101}
   ]
  },
  {
   "name": "scale",
   "children": [
    {"name": "IScaleMap", "size": 2105},
    {"name": "LinearScale", "size": 1316},
    {"name": "LogScale", "size": 3151},
    {"name": "OrdinalScale", "size": 3770},
    {"name": "QuantileScale", "size": 2435},
    {"name": "QuantitativeScale", "size": 4839},
    {"name": "RootScale", "size": 1756},
    {"name": "Scale", "size": 4268},
    {"name": "ScaleType", "size": 1821},
    {"name": "TimeScale", "size": 5833}
   ]
  },
  {
   "name": "util",
   "children": [
    {"name": "Arrays", "size": 8258},
    {"name": "Colors", "size": 10001},
    {"name": "Dates", "size": 8217},
    {"name": "Displays", "size": 12555},
    {"name": "Filter", "size": 2324},
    {"name": "Geometry", "size": 10993},
    {
     "name": "heap",
     "children": [
      {"name": "FibonacciHeap", "size": 9354},
      {"name": "HeapNode", "size": 1233}
     ]
    },
    {"name": "IEvaluable", "size": 335},
    {"name": "IPredicate", "size": 383},
    {"name": "IValueProxy", "size": 874},
    {
     "name": "math",
     "children": [
      {"name": "DenseMatrix", "size": 3165},
      {"name": "IMatrix", "size": 2815},
      {"name": "SparseMatrix", "size": 3366}
     ]
    },
    {"name": "Maths", "size": 17705},
    {"name": "Orientation", "size": 1486},
    {
     "name": "palette",
     "children": [
      {"name": "ColorPalette", "size": 6367},
      {"name": "Palette", "size": 1229},
      {"name": "ShapePalette", "size": 2059},
      {"name": "SizePalette", "size": 2291}
     ]
    },
    {"name": "Property", "size": 5559},
    {"name": "Shapes", "size": 19118},
    {"name": "Sort", "size": 6887},
    {"name": "Stats", "size": 6557},
    {"name": "Strings", "size": 22026}
   ]
  },
  {
   "name": "vis",
   "children": [
    {
     "name": "axis",
     "children": [
      {"name": "Axes", "size": 1302},
      {"name": "Axis", "size": 24593},
      {"name": "AxisGridLine", "size": 652},
      {"name": "AxisLabel", "size": 636},
      {"name": "CartesianAxes", "size": 6703}
     ]
    },
    {
     "name": "controls",
     "children": [
      {"name": "AnchorControl", "size": 2138},
      {"name": "ClickControl", "size": 3824},
      {"name": "Control", "size": 1353},
      {"name": "ControlList", "size": 4665},
      {"name": "DragControl", "size": 2649},
      {"name": "ExpandControl", "size": 2832},
      {"name": "HoverControl", "size": 4896},
      {"name": "IControl", "size": 763},
      {"name": "PanZoomControl", "size": 5222},
      {"name": "SelectionControl", "size": 7862},
      {"name": "TooltipControl", "size": 8435}
     ]
    },
    {
     "name": "data",
     "children": [
      {"name": "Data", "size": 20544},
      {"name": "DataList", "size": 19788},
      {"name": "DataSprite", "size": 10349},
      {"name": "EdgeSprite", "size": 3301},
      {"name": "NodeSprite", "size": 19382},
      {
       "name": "render",
       "children": [
        {"name": "ArrowType", "size": 698},
        {"name": "EdgeRenderer", "size": 5569},
        {"name": "IRenderer", "size": 353},
        {"name": "ShapeRenderer", "size": 2247}
       ]
      },
      {"name": "ScaleBinding", "size": 11275},
      {"name": "Tree", "size": 7147},
      {"name": "TreeBuilder", "size": 9930}
     ]
    },
    {
     "name": "events",
     "children": [
      {"name": "DataEvent", "size": 2313},
      {"name": "SelectionEvent", "size": 1880},
      {"name": "TooltipEvent", "size": 1701},
      {"name": "VisualizationEvent", "size": 1117}
     ]
    },
    {
     "name": "legend",
     "children": [
      {"name": "Legend", "size": 20859},
      {"name": "LegendItem", "size": 4614},
      {"name": "LegendRange", "size": 10530}
     ]
    },
    {
     "name": "operator",
     "children": [
      {
       "name": "distortion",
       "children": [
        {"name": "BifocalDistortion", "size": 4461},
        {"name": "Distortion", "size": 6314},
        {"name": "FisheyeDistortion", "size": 3444}
       ]
      },
      {
       "name": "encoder",
       "children": [
        {"name": "ColorEncoder", "size": 3179},
        {"name": "Encoder", "size": 4060},
        {"name": "PropertyEncoder", "size": 4138},
        {"name": "ShapeEncoder", "size": 1690},
        {"name": "SizeEncoder", "size": 1830}
       ]
      },
      {
       "name": "filter",
       "children": [
        {"name": "FisheyeTreeFilter", "size": 5219},
        {"name": "GraphDistanceFilter", "size": 3165},
        {"name": "VisibilityFilter", "size": 3509}
       ]
      },
      {"name": "IOperator", "size": 1286},
      {
       "name": "label",
       "children": [
        {"name": "Labeler", "size": 9956},
        {"name": "RadialLabeler", "size": 3899},
        {"name": "StackedAreaLabeler", "size": 3202}
       ]
      },
      {
       "name": "layout",
       "children": [
        {"name": "AxisLayout", "size": 6725},
        {"name": "BundledEdgeRouter", "size": 3727},
        {"name": "CircleLayout", "size": 9317},
        {"name": "CirclePackingLayout", "size": 12003},
        {"name": "DendrogramLayout", "size": 4853},
        {"name": "ForceDirectedLayout", "size": 8411},
        {"name": "IcicleTreeLayout", "size": 4864},
        {"name": "IndentedTreeLayout", "size": 3174},
        {"name": "Layout", "size": 7881},
        {"name": "NodeLinkTreeLayout", "size": 12870},
        {"name": "PieLayout", "size": 2728},
        {"name": "RadialTreeLayout", "size": 12348},
        {"name": "RandomLayout", "size": 870},
        {"name": "StackedAreaLayout", "size": 9121},
        {"name": "TreeMapLayout", "size": 9191}
       ]
      },
      {"name": "Operator", "size": 2490},
      {"name": "OperatorList", "size": 5248},
      {"name": "OperatorSequence", "size": 4190},
      {"name": "OperatorSwitch", "size": 2581},
      {"name": "SortOperator", "size": 2023}
     ]
    },
    {"name": "Visualization", "size": 16540}
   ]
  }
 ]
}
```

```mindmap tree
{
  "depth": 1,
  "line": 1,
  "name": "A General Theory of Reactivity",
  "children": [
    {
      "depth": 2,
      "line": 45,
      "name": "Concepts",
      "children": [
        {
          "depth": 3,
          "line": 101,
          "name": "Singular and temporal"
        },
        {
          "depth": 3,
          "line": 151,
          "name": "Plural and temporal"
        }
      ]
    },
    {
      "depth": 2,
      "line": 237,
      "name": "Primitives",
      "children": [
        {
          "depth": 3,
          "line": 244,
          "name": "Iterators"
        },
        {
          "depth": 3,
          "line": 363,
          "name": "Generator Functions"
        },
        {
          "depth": 3,
          "line": 475,
          "name": "Generators"
        },
        {
          "depth": 3,
          "line": 505,
          "name": "Asynchronous Values"
        },
        {
          "depth": 3,
          "line": 653,
          "name": "Asynchronous Functions"
        },
        {
          "depth": 3,
          "line": 748,
          "name": "Promise Queues"
        },
        {
          "depth": 3,
          "line": 851,
          "name": "Semaphores"
        },
        {
          "depth": 3,
          "line": 897,
          "name": "Promise Buffers",
          "children": [
            {
              "depth": 4,
              "line": 959,
              "name": " means “write”."
            },
            {
              "depth": 4,
              "line": 960,
              "name": " means “close”."
            },
            {
              "depth": 4,
              "line": 961,
              "name": " means “terminate prematurely with an error”."
            },
            {
              "depth": 4,
              "line": 962,
              "name": " means “read”."
            },
            {
              "depth": 4,
              "line": 963,
              "name": " means “abort or cancel with an error”."
            },
            {
              "depth": 4,
              "line": 964,
              "name": " means “abort or cancel prematurely but without an error”."
            }
          ]
        },
        {
          "depth": 3,
          "line": 1013,
          "name": "Promise Iterators",
          "children": [
            {
              "depth": 4,
              "line": 1056,
              "name": "map"
            },
            {
              "depth": 4,
              "line": 1076,
              "name": "forEach"
            },
            {
              "depth": 4,
              "line": 1119,
              "name": "reduce"
            },
            {
              "depth": 4,
              "line": 1135,
              "name": "pipe"
            },
            {
              "depth": 4,
              "line": 1151,
              "name": "buffer"
            },
            {
              "depth": 4,
              "line": 1159,
              "name": "read"
            },
            {
              "depth": 4,
              "line": 1169,
              "name": "Remote iterators"
            }
          ]
        },
        {
          "depth": 3,
          "line": 1194,
          "name": "Promise Generators"
        },
        {
          "depth": 3,
          "line": 1232,
          "name": "Asynchronous Generator Functions"
        },
        {
          "depth": 3,
          "line": 1413,
          "name": "Observables",
          "children": [
            {
              "depth": 4,
              "line": 1484,
              "name": "TODO make sure this is a summary of the topics in the end:"
            }
          ]
        },
        {
          "depth": 3,
          "line": 1490,
          "name": "Observables and Signals"
        },
        {
          "depth": 3,
          "line": 1561,
          "name": "Behaviors"
        }
      ]
    },
    {
      "depth": 2,
      "line": 1579,
      "name": "Cases",
      "children": [
        {
          "depth": 3,
          "line": 1581,
          "name": "Progress and estimated time to completion"
        }
      ]
    },
    {
      "depth": 2,
      "line": 1635,
      "name": "Summary"
    },
    {
      "depth": 2,
      "line": 1665,
      "name": "Further Work"
    },
    {
      "depth": 2,
      "line": 1745,
      "name": "Acknowledgements"
    }
  ]
}
```

## mindmap json-mup

https://github.com/dundalek/markmap/blob/master/examples/data/MindMapping.mup

```mindmap json-mup
{
  "title": "MindMapping",
  "id": 1,
  "formatVersion": 2,
  "ideas": {
    "11": {
      "title": "Software",
      "id": 8,
      "ideas": {
        "1": {
          "title": "FreeMind",
          "id": 9
        },
        "2": {
          "title": "XMind",
          "id": 10
        },
        "3": {
          "title": "MindMeister",
          "id": 11
        },
        "4": {
          "title": "iMindMap",
          "id": 13,
          "ideas": {
            "1": {
              "title": "by Tony Buzan",
              "id": 30
            }
          }
        },
        "5": {
          "title": "MindManager",
          "id": 14
        },
        "2.5": {
          "title": "MindMup",
          "id": 12
        }
      }
    },
    "21": {
      "title": "Misc",
      "id": 15,
      "ideas": {
        "1": {
          "title": "Visual Understanding Environment (VUE)",
          "id": 23,
          "ideas": {
            "1": {
              "title": "http://vue.tufts.edu/index.cfm",
              "id": 24
            }
          }
        },
        "2": {
          "title": "TiddlyMap",
          "id": 26
        },
        "3": {
          "title": "Orgmode.org",
          "id": 27
        },
        "4": {
          "title": "https://www.moh.io/mohiomap",
          "id": 31,
          "ideas": {}
        }
      }
    },
    "31": {
      "title": "Resources",
      "id": 2,
      "ideas": {
        "1": {
          "title": "http://lifehacker.com/five-best-mind-mapping-tools-476534555",
          "id": 18
        },
        "2": {
          "title": "http://lifehacker.com/5188833/hive-five-five-best-mind-mapping-applications",
          "id": 19
        },
        "3": {
          "title": "https://en.wikipedia.org/wiki/List_of_concept-_and_mind-mapping_software",
          "id": 21
        }
      },
      "attr": {
        "position": [
          67.5,
          255,
          1
        ],
        "style": {}
      }
    }
  }
}
```

## mindmap kityminder

https://github.com/fex-team/kityminder-core/blob/dev/example.html

```mindmap kityminder
{
    "root": {
        "data": {
            "text": "百度产品",
            "image": "https://www.baidu.com/img/bd_logo1.png?where=super",
            "imageSize": { "width": 270, "height": 129 }
        },
        "children": [
            { "data": { "text": "新闻" } },
            { "data": { "text": "网页", "priority": 1 } },
            { "data": { "text": "贴吧", "priority": 2 } },
            { "data": { "text": "知道", "priority": 2 } },
            { "data": { "text": "音乐", "priority": 3 } },
            { "data": { "text": "图片", "priority": 3 } },
            { "data": { "text": "视频", "priority": 3 } },
            { "data": { "text": "地图", "priority": 3 } },
            { "data": { "text": "百科", "priority": 3 } },
            { "data": { "text": "更多", "hyperlink": "http://www.baidu.com/more" } }
        ]
    }
}
```

## mindmap json-kityminder

```mindmap json-kityminder
{
    "root": {
        "data": {
            "text": "百度产品",
            "image": "https://www.baidu.com/img/bd_logo1.png?where=super",
            "imageSize": { "width": 270, "height": 129 }
        },
        "children": [
            { "data": { "text": "新闻" } },
            { "data": { "text": "网页", "priority": 1 } },
            { "data": { "text": "贴吧", "priority": 2 } },
            { "data": { "text": "知道", "priority": 2 } },
            { "data": { "text": "音乐", "priority": 3 } },
            { "data": { "text": "图片", "priority": 3 } },
            { "data": { "text": "视频", "priority": 3 } },
            { "data": { "text": "地图", "priority": 3 } },
            { "data": { "text": "百科", "priority": 3 } },
            { "data": { "text": "更多", "hyperlink": "http://www.baidu.com/more" } }
        ]
    }
}
```
