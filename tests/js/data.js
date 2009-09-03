YAHOO.namespace('caja').data = {
    core: [
        { module:'yahoo', status: 'working',
          cajoled: true, yuitest: 'test=yahoo', examples: 6, tests : [16,3,3] },

        { module:'dom', status: 'working',
          cajoled: true, yuitest: 'test=dom', examples: 6, tests : [31,1,0] },

        { module:'event', status: 'working',
          cajoled: true, yuitest: false, examples: 4, tests : [0,0,0] },

        { module:'yahoo-dom-event', status: 'working',
          cajoled: true, yuitest: false, examples: 1, tests : [0,0,0] },

        { module:'utilities', status: 'conditional',
          cajoled: true, yuitest: false, examples: 1, tests : [0,0,0] },

        { module: 'reset-fonts-grids', status: 'wip',
          cajoled: true, yuitest: false, examples: 17, tests: [0,0,0] }
    ],

// Utils

    utils: [
        { module:'connection', status: 'conditional',
          cajoled: true, yuitest: 'test=connection', examples: 7, tests : [0,0,1] },

        { module:'dragdrop', status: 'conditional',
          cajoled: true, yuitest: 'test=dd', examples: 9, tests : [5,3,0] },

        { module:'animation', status: 'working',
          cajoled: true, yuitest: 'test=animation', examples: 10, tests : [5,0,0] },

        { module:'json', status: 'conditional',
          cajoled: true, yuitest: 'test=json', examples: 5, tests : [44,0,6] },

        { module:'datasource', status: 'conditional',
          cajoled: true, yuitest: 'test=datasource', examples: 1, tests : [12,2,1]},

        { module:'element', status: 'working',
          cajoled: true, yuitest: 'test=element', examples: 0, tests : [11,0,2] },

        { module:'selector', status: 'wip',
          cajoled: true, yuitest: 'test=selector', examples: 2, tests : [4,6,2] },

        { module:'yuitest', status: 'conditional',
          cajoled: 'custom', yuitest: 'test=yuitest', examples: 6, tests : [49,0,68] },

        { module:'cookie', status: 'unsupported',
          cajoled: true, yuitest: 'test=cookie', examples: 3, tests : [137,31,0] },

        { module:'profiler', status: 'conditional',
          cajoled: true, yuitest: 'test=profiler', examples: 2, tests : [13,0,1] },

        { module:'imageloader', status: 'wip',
          cajoled: true, yuitest: 'test=imageloader', examples: 4, tests : [0,0,0] },

        { module:'stylesheet', status: 'pending',
          cajoled: true, yuitest: 'test=stylesheet', examples: 0, tests : [0,0,0] },

        { module:'resize', status: 'pending',
          cajoled: true, yuitest: false, examples: 7, tests : [0,0,0] },

        { module:'layout', status: 'wip',
          cajoled: true, yuitest: false, examples: 7, tests : [0,0,0] },

        { module:'history', status: 'pending',
          cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0] },
    ],

// Widgets

    widgets: [
        { module:'autocomplete', status: 'wip',
          cajoled: true, yuitest: 'include=datasource&test=autocomplete',
          examples: 12, tests : [14,1,0] },

        { module:'button', status: 'conditional',
          cajoled: true, yuitest: false, examples: 17, tests : [0,0,0] },

        { module:'container', status: 'wip',
          cajoled: true, yuitest: [
            '[[include=container&test=module]Module]',
            '[[include=container&test=config]Config]' ],
          examples: 15, tests : [13,0,0] },

        { module:'datatable', status: 'pending',
          cajoled: true, yuitest: 'test=datatable', examples: 31, tests : [63,4,11] },

        { module:'menu', status: 'wip',
          cajoled: true, yuitest: 'include=container&test=menu',
          examples: 26, tests : [0,0,1] },

        { module:'slider', status: 'wip',
          cajoled: true, yuitest: false, examples: 7, tests : [0,0,0] },

        { module:'tabview', status: 'wip',
          cajoled: true, yuitest: 'test=tabview', examples: 7, tests : [8,0,0] },

        { module:'calendar', status: 'wip',
          cajoled: true, yuitest: [
            "[[test=calendar]Calendar]",
            "[[include=calendar&test=datemath]DateMath]" ],
          examples: 14, tests : [57,4,0] },

        { module:'colorpicker', status: 'wip',
          cajoled: true, yuitest: 'include=dragdrop,slider&test=colorpicker',
          examples: 4, tests : [4,0,2] },

        { module:'paginator', status: 'wip',
          cajoled: true, yuitest: 'test=paginator', examples: 4, tests : [7,0,0] },

        { module:'editor', status: 'pending',
          cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0] },

        { module:'treeview', status: 'wip',
          cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0] },

        { module:'uploader', status: 'pending',
          cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0] },

        { module:'imagecropper', status: 'pending',
          cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0] },

        { module:'charts', status: 'pending',
          cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0] },

        { module:'logger', status: 'pending',
          cajoled: true, yuitest: 'pending', examples: 0, tests : [0,0,0] },
    ]
};
