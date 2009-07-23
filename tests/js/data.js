YAHOO.namespace('caja').data = [
    { module:'yahoo',
      cajoled: true, yuitest: true, examples: 6, tests : [16,6,0],
      files: {
        yuitest: 'test=yahoo',
        tests: {
            "Core test (events, lang, etc)": "suffix=gadget&test=core"
        },
        examples: { }
      }
    },
    { module:'dom',
      cajoled: true, yuitest: true, examples: 6, tests : [31,1,0],
      files: {
        yuitest: 'test=dom',
      }
    },
    { module:'event',
      cajoled: true, yuitest: false, examples: 3, tests : [0,0,0],
      files: {
        tests: {
            "Core test (events, lang, etc)": "suffix=gadget&test=core"
        },
        examples: {
            'Event basics' : 'suffix=example&test=eventsimple',
            'Custom events' : 'suffix=example&test=custom-event',
            'Event delegation' : 'suffix=example&test=event-delegation'
        }
      }
    },
    { module:'selector',
      cajoled: true, yuitest: true, examples: 2, tests : [4,8,0],
      files: {
        yuitest: 'test=selector',
      }
    },
    { module:'yahoo-dom-event',
      cajoled: true, yuitest: false, examples: 0, tests : [0,0,0], files: { }
    },
    { module:'utilities',
      cajoled: true, yuitest: false, examples: 0, tests : [0,0,0],
      files: {
        tests: {
            "Core test (events, lang, etc)": "suffix=gadget&test=core"
        }
      }
    },
    { module:'connection',
      cajoled: true, yuitest: true, examples: 6, tests : [0,0,1],
      files: {
        yuitest: 'test=connection',
        tests: {
            'Basic asyncRequest' : 'suffix=gadget&test=connection'
        },
        examples: {
            GET: 'suffix=gadget&test=get',
            POST: 'suffix=gadget&test=post',
            abort: 'suffix=gadget&test=abort',
            'Weather feed': 'suffix=gadget&test=weather',
            'Global custom events': 'suffix=gadget&test=global_customevents',
            'Callback custom events': 'suffix=gadget&test=callback_customevents'
        }
      }
    },
    { module:'dragdrop',
      cajoled: true, yuitest: true, examples: 9, tests : [5,3,0],
      files: {
        yuitest: 'test=dd'
      }
    },
    { module:'animation',
      cajoled: true, yuitest: true, examples: 10, tests : [5,0,0],
      files: {
        yuitest: 'test=animation'
      }
    },
    { module:'datasource',
      cajoled: true, yuitest: true, examples: 1, tests : [12,2,1],
      files: {
        yuitest: 'test=datasource'
      }
    },
    { module:'element',
      cajoled: true, yuitest: true, examples: 0, tests : [11,2,0],
      files: {
        yuitest: 'test=element'
      }
    },
    { module:'yuitest',
      cajoled: 'custom', yuitest: true, examples: 5, tests : [49,0,68],
      files: {
        yuitest: 'test=yuitest',
        tests: {
            'Simple suite to test that YUI Test cajoles': 'suffix=gadget&test=yuitest'
        }
      }
    },
    { module:'cookie',
      cajoled: true, yuitest: true, examples: 3, tests : [137,31,0],
      files: {
        yuitest: 'test=cookie'
      }
    },
    { module:'profiler',
      cajoled: true, yuitest: true, examples: 2, tests : [13,0,1],
      files: {
        yuitest: 'test=profiler'
      }
    },
    { module:'imageloader',
      cajoled: true, yuitest: 'error', examples: 4, tests : [0,0,0],
      files: {
        yuitest: 'test=imageloader'
      }
    },
    { module:'autocomplete',
      cajoled: true, yuitest: true, examples: 12, tests : [14,1,0],
      files: {
        yuitest: 'include=datasource&test=autocomplete',
        examples: {
            'From local array': 'suffix=example&include=data,datasource,autocomplete&test=autocomplete_basic_array'
        }
      }
    },
    { module:'menu',
      cajoled: true, yuitest: true, examples: 26, tests : [0,0,1],
      files: {
        yuitest: 'include=container&test=menu'
      }
    },
    { module:'tabview',
      cajoled: true, yuitest: true, examples: 7, tests : [8,0,0],
      files: {
        yuitest: 'test=tabview'
      }
    },
    { module:'slider',
      cajoled: true, yuitest: false, examples: 6, tests : [0,0,0],
      files: {
        tests: {
            'Basic start/end reporting':'test=slider'
        }
      }
    },
    { module:'container',
      cajoled: true, yuitest: true, examples: 15, tests : [12,1,0],
      files: {
        yuitest: 'include=container&test=module',
        tests: {
            'util.Config YUI Test suite': 'include=container&test=config'
        }
      }
    },
    { module:'calendar', // Many errors that triggered the stop on 'debugger'
      cajoled: true, yuitest: true, examples: 14, tests : [57,4,0],
      files: {
        yuitest: 'test=calendar',
        tests: {
            'DateMath YUI Test suite': 'include=calendar&test=datemath'
        }
      }
    },
    { module:'colorpicker',
      cajoled: true, yuitest: true, examples: 4, tests : [4,0,2],
      files: {
        yuitest: 'include=dragdrop,slider&test=colorpicker'
      }
    },
    { module:'paginator',
      cajoled: true, yuitest: true, examples: 4, tests : [7,0,0],
      files: {
        yuitest: 'test=paginator'
      }
    },
    { module:'json',
      cajoled: true, yuitest: true, examples: 3, tests : [44,0,6],
      files: {
        yuitest: 'test=json',
        tests: {
            'Simple test': 'suffix=gadget&test=json'
        }
      }
    },

/// STOPPED HERE

    { module:'button',
      cajoled: true, yuitest: false, examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      }
    },
    { module:'layout',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      }
    },
    { module:'datatable',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      }
    },
    { module:'editor',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      }
    },
    { module:'treeview',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: {
            'Simple test': 'suffix=gadget&test=treeview'
        },
        examples: { }
      }
    },
    { module:'uploader',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      }
    },
    { module:'imagecropper',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      }
    },
    { module:'charts',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      }
    },
    { module:'history',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      }
    },
    { module:'logger',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      }
    },
    { module:'stylesheet',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: { },
        examples: { }
      }
    },
    { module:'resize',
      cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0],
      files: {
        yuitest: 'test=',
        tests: {
            'Simple test': 'suffix=gadget&test=resize'
        }
      }
    }
];
