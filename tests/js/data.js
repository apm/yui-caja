YAHOO.namespace('caja').data = {
    core: [
        { module:'yahoo', status: 'working',
          yuitest: 'test=yahoo', tests : [16,3,3] },

        { module:'dom', status: 'working',
          yuitest: 'test=dom', tests : [32,2,0] },

        { module:'event', status: 'working',
          yuitest: false, tests : [4,7,11] },

        { module:'yahoo-dom-event', status: 'working',
          yuitest: false, tests : [0,0,0] },

        { module:'utilities', status: 'conditional',
          yuitest: false, tests : [0,0,0] },

        { module: 'reset-fonts-grids', status: 'wip',
          yuitest: false, tests: [0,0,0] },

        { module: 'base', status: 'pending',
          yuitest: false, tests: [0,0,0] }
    ],

// Utils

    utils: [
        { module:'animation', status: 'conditional',
          yuitest: 'test=animation', tests : [5,0,0] },

        { module:'connection', status: 'conditional',
          yuitest: 'test=connection', tests : [1,0,1] },

        { module:'cookie', status: 'unsupported',
          yuitest: 'test=cookie', tests : [137,31,0] },

        { module:'datasource', status: 'working',
          yuitest: 'test=datasource', tests : [14,0,1]},

        { module:'dragdrop', status: 'conditional',
          yuitest: 'test=dd', tests : [5,3,0] },

        { module:'element', status: 'working',
          yuitest: 'test=element', tests : [11,0,2] },

        { module:'get', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'history', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'imagecropper', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'imageloader', status: 'wip',
          yuitest: 'test=imageloader', tests : [0,0,0] },

        { module:'json', status: 'conditional',
          yuitest: 'test=json', tests : [44,0,6] },

        { module:'layout', status: 'wip',
          yuitest: false, tests : [0,0,0] },

        { module:'logger', status: 'working',
          yuitest: 'test=logger', tests : [5,0,0] },

        { module:'profiler', status: 'conditional',
          yuitest: 'test=profiler', tests : [13,0,1] },

        { module:'resize', status: 'pending',
          yuitest: false, tests : [0,0,0] },

        { module:'selector', status: 'wip',
          yuitest: 'test=selector', tests : [5,7,0] },

        { module:'storage', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'stylesheet', status: 'pending',
          yuitest: 'test=stylesheet', tests : [0,0,0] },

        { module:'swf', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'swfstore', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'uploader', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'yuiloader', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'yuitest', status: 'conditional',
          yuitest: 'test=yuitest', tests : [49,0,68] }
    ],

// Widgets

    widgets: [
        { module:'autocomplete', status: 'working',
          yuitest: 'test=autocomplete', tests : [15,0,0] },

        { module:'button', status: 'conditional',
          yuitest: false, tests : [0,0,0] },

        { module:'calendar', status: 'wip',
          yuitest: 'pending', tests : [57,4,0] },

        { module:'carousel', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'charts', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'colorpicker', status: 'wip',
          yuitest: 'test=colorpicker', tests : [4,0,2] },

        { module:'container', status: 'wip',
          yuitest: [
            '[[test=module]Module]',
            '[[test=config]Config]' ],
          tests : [13,0,0] },

        { module:'datatable', status: 'pending',
          yuitest: 'test=datatable', tests : [63,4,11] },

        { module:'editor', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'menu', status: 'wip',
          yuitest: 'test=menu', tests : [0,0,0] },

        { module:'paginator', status: 'wip',
          yuitest: 'test=paginator', tests : [7,0,0] },

        { module:'profilerviewer', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'progressbar', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'slider', status: 'wip',
          yuitest: false, tests : [0,0,0] },

        { module:'tabview', status: 'wip',
          yuitest: 'test=tabview', tests : [8,0,0] },

        { module:'treeview', status: 'wip',
          yuitest: 'pending', tests : [0,0,0] },

        { module:'uploader', status: 'pending',
          yuitest: 'pending', tests : [0,0,0] }
    ]
};
