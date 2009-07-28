YAHOO.namespace('caja').data = {
    core: [
    { module:'yahoo',
      cajoled: true, yuitest: true, examples: 6, tests : [16,6,0],
      files: {
        yuitest: 'test=yahoo',
        tests: {
            "Core test (events, lang, etc)": "suffix=gadget&test=core"
        }
      },
      status: 'working'
    },
    { module:'dom',
      cajoled: true, yuitest: true, examples: 6, tests : [31,1,0],
      files: {
        yuitest: 'test=dom',
      },
      status: 'working'
    },
    { module:'event',
      cajoled: true, yuitest: false, examples: 3, tests : [0,0,0],
      files: {
        tests: [
            "[[suffix=gadget&test=core]Core test (events, lang, etc)]" 
        ]
      },
      status: 'working'
    },
    { module:'yahoo-dom-event',
      cajoled: true, yuitest: false, examples: 0, tests : [0,0,0], files: { },
      status: 'working'
    },
    { module:'utilities',
      cajoled: true, yuitest: false, examples: 0, tests : [0,0,0],
      files: {
        tests: [
            "[[suffix=gadget&test=cor]Core test (events, lang, etc])"
        ]
      },
      status: 'conditional'
    }],

// Utils

    utils: [
   { module:'connection',
      cajoled: true, yuitest: true, examples: 6, tests : [0,0,1],
      files: {
        yuitest: 'test=connection',
        tests: [
            '[[suffix=gadget&test=connectio]Basic asyncRequest]'
        ]
      },
      status: 'conditional'
    },
    { module:'dragdrop',
      cajoled: true, yuitest: true, examples: 9, tests : [5,3,0],
      files: {
        yuitest: 'test=dd'
      },
      status: 'conditional'
    },
    { module:'animation',
      cajoled: true, yuitest: true, examples: 10, tests : [5,0,0],
      files: [
        '[[test=animation]yuitest]'
      ],
      status: 'working'
    },
    { module:'json',
      cajoled: true, yuitest: true, examples: 3, tests : [44,0,6],
      files: {
        yuitest: 'test=json',
        tests: [
            '[[suffix=gadget&test=json]Simple test]'
        ]
      },
      status: 'conditional'
    },
    { module:'datasource',
      cajoled: true, yuitest: true, examples: 1, tests : [12,2,1],
      files: {
        yuitest: 'test=datasource'
      },
      status: 'conditional'
    },
    { module:'element',
      cajoled: true, yuitest: true, examples: 0, tests : [11,2,0],
      files: {
        yuitest: 'test=element'
      },
      status: 'working'
    },
    { module:'selector',
      cajoled: true, yuitest: true, examples: 2, tests : [4,8,0],
      files: {
        yuitest: 'test=selector',
      },
      status: 'wip'
    },
    { module:'yuitest',
      cajoled: 'custom', yuitest: true, examples: 5, tests : [49,0,68],
      files: {
        yuitest: 'test=yuitest',
        tests: [
            '[[suffix=gadget&test=yuitest]Simple suite to test that YUI Test cajoles]'
        ]
      },
      status: 'conditional'
    },
    { module:'cookie',
      cajoled: true, yuitest: true, examples: 3, tests : [137,31,0],
      files: {
        yuitest: 'test=cookie'
      },
      status: 'unsupported'
    },
    { module:'profiler',
      cajoled: true, yuitest: true, examples: 2, tests : [13,0,1],
      files: {
        yuitest: 'test=profiler'
      },
      status: 'conditional'
    },
    { module:'imageloader',
      cajoled: true, yuitest: 'error', examples: 4, tests : [0,0,0],
      files: {
        yuitest: 'test=imageloader'
      },
      status: 'wip'
    },
    { module:'stylesheet',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { }
      },
      status: 'pending'
    },
    { module:'resize',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: [
            '[[suffix=gadget&test=resize]Simple test]'
        ]
      },
      status: 'pending'
    },
    { module:'layout',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      },
      status: 'pending'
    },
    { module:'history',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      },
      status: 'pending'
    }],

// Widgets

    widgets: [
    { module:'autocomplete',
      cajoled: true, yuitest: true, examples: 12, tests : [14,1,0],
      files: {
        yuitest: 'include=datasource&test=autocomplete'
      },
      status: 'wip'
    },
    { module:'button',
      cajoled: true, yuitest: false, examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      },
      status: 'conditional'
    },
    { module:'container',
      cajoled: true, yuitest: true, examples: 15, tests : [12,1,0],
      files: {
        yuitest: 'include=container&test=module',
        tests: [
            '[[include=container&test=config]util.Config YUI Test suite]'
        ]
      },
      status: 'wip'
    },
    { module:'datatable',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      },
      status: 'pending'
    },
    { module:'menu',
      cajoled: true, yuitest: true, examples: 26, tests : [0,0,1],
      files: {
        yuitest: 'include=container&test=menu'
      },
      status: 'wip'
    },
    { module:'slider',
      cajoled: true, yuitest: false, examples: 6, tests : [0,0,0],
      files: {
        tests: [
            '[[est=slider]Basic start/end reporting]'
        ]
      },
      status: 'wip'
    },
    { module:'tabview',
      cajoled: true, yuitest: true, examples: 7, tests : [8,0,0],
      files: {
        yuitest: 'test=tabview'
      },
      status: 'wip'
    },
    { module:'calendar', // Many errors that triggered the stop on 'debugger'
      cajoled: true, yuitest: true, examples: 14, tests : [57,4,0],
      files: {
        yuitest: 'test=calendar',
        tests: [
            '[[include=calendar&test=datemath]DateMath YUI Test suite]'
        ]
      },
      status: 'wip'
    },
    { module:'colorpicker',
      cajoled: true, yuitest: true, examples: 4, tests : [4,0,2],
      files: {
        yuitest: 'include=dragdrop,slider&test=colorpicker'
      },
      status: 'wip'
    },
    { module:'paginator',
      cajoled: true, yuitest: true, examples: 4, tests : [7,0,0],
      files: {
        yuitest: 'test=paginator'
      },
      status: 'wip'
    },
    { module:'editor',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      },
      status: 'pending'
    },
    { module:'treeview',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: [
            '[[suffix=gadget&test=treeview]Simple test]'
        ],
        examples: { }
      },
      status: 'wip'
    },
    { module:'uploader',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      },
      status: 'pending'
    },
    { module:'imagecropper',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      },
      status: 'pending'
    },
    { module:'charts',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      },
      status: 'pending'
    },
    { module:'logger',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      },
      status: 'pending'
    }]
};
