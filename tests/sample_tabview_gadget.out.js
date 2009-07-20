{
  ___.loadModule({
                   'instantiate': function (___, IMPORTS___) {
                     var moduleResult___ = ___.NO_RESULT;
                     var $v = ___.readImport(IMPORTS___, '$v', {
                           'getOuters': {
                             '()': { }
                           },
                           'initOuter': {
                             '()': { }
                           },
                           'so': {
                             '()': { }
                           },
                           'construct': {
                             '()': { }
                           },
                           'r': {
                             '()': { }
                           },
                           'ro': {
                             '()': { }
                           }
                         });
                     var $dis = $v.getOuters();
                     $v.initOuter('onerror');
                     {
                       var el___;
                       var emitter___ = IMPORTS___.htmlEmitter___;
                       el___ = emitter___.byId('id_1___');
                       emitter___.attach('id_1___');
                       emitter___.setAttr(el___, 'id', 'container-' +
                           IMPORTS___.getIdClass___());
                     }
                     try {
                       {
                         moduleResult___ = $v.so('tabView',
                             $v.construct($v.r($v.r($v.ro('YAHOO'), 'widget'),
                                     'TabView'), [ ]));
                       }
                     } catch (ex___) {
                       ___.getNewModuleHandler().handleUncaughtException(ex___,
                           $v.ro('onerror'), 'sample_tabview_gadget.html', '8')
                           ;
                     }
                     {
                       el___ = emitter___.finish();
                       emitter___.signalLoaded();
                     }
                     return moduleResult___;
                   },
                   'cajolerName': 'com.google.caja',
                   'cajolerVersion': '3567',
                   'cajoledDate': 1247674131870
                 });
}
