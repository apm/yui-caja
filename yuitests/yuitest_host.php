<?php
    $test = '';

    if (isset($_GET['test'])) {
        $test = $_GET['test'];
    }

    $caja_base = '../../google-caja';
    
    if (isset($_GET['caja_base'])) {
        $caja_base = $_GET['caja_base'];
    }

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>

    <title>YUI/Caja Host Page</title>

    <script src="<?php echo $caja_base ?>/ant-lib/com/google/caja/plugin/html-sanitizer-minified.js"></script>
    <script src="<?php echo $caja_base ?>/third_party/js/json_sans_eval/json_sans_eval.js"></script>
    <script src="<?php echo $caja_base ?>/ant-www/testbed/cajita.js"></script>
    <script src="<?php echo $caja_base ?>/ant-www/testbed/cajita-debugmode.js"></script>
    <script src="<?php echo $caja_base ?>/ant-www/testbed/unicode.js"></script>
    <script src="<?php echo $caja_base ?>/ant-www/testbed/html-emitter.js"></script>
    <script src="<?php echo $caja_base ?>/ant-www/testbed/bridal.js"></script>
    <script src="<?php echo $caja_base ?>/ant-www/testbed/domita.js"></script>
    <script src="<?php echo $caja_base ?>/ant-www/testbed/log-to-console.js"></script>

    <script>
    (function(){
      // Give the module a variable into which it can export the valija maker
      var imports = ___.copy(___.sharedImports);
      ___.getNewModuleHandler().setImports(imports);
      imports.loader = ___.freeze(
          { provide:___.func(function (v) { valijaMaker = v; }) });
    })();
    </script>

    <!-- In ant-lib/com/google/caja/plugin/ -->
    <script src="<?php echo $caja_base ?>/ant-www/testbed/valija.co.js"></script>

  </head>
  <body>
    <div id="gadget___" class="gadget___"></div>

    <script>(function () {
      var testImports = ___.copy(___.sharedImports);
      testImports.outers = testImports;
      var testDomContainer = document.getElementById('gadget___');

      ___.getNewModuleHandler().setImports(testImports);

      attachDocumentStub(
           '-gadget___',
           {
             rewrite:
                 function (uri, mimeType) {
                   return uri;
                 }
           },
           testImports,
           testDomContainer,
           null);

      testImports.htmlEmitter___ = new HtmlEmitter(testDomContainer);
      testImports.$v = valijaMaker.CALL___(testImports.outers); 
    })();</script>

    <script type="text/javascript">
      function loadScript(src) {
        document.write(
            '<script src="' + html.escapeAttrib(src) + '"'
            + ' onerror="console.error(this.src)"><\/script>');
      }

      function makeXhr() {
        if (typeof XMLHttpRequest === 'undefined') {
          var activeXClassIds = [
              'MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0',
              'MSXML2.XMLHTTP', 'MICROSOFT.XMLHTTP.1.0', 'MICROSOFT.XMLHTTP.1',
              'MICROSOFT.XMLHTTP'];
          for (var i = 0, n = activeXClassIds.length; i < n; i++) {
            var candidate = activeXClassIds[i];
            try {
              return new ActiveXObject(candidate);
            } catch (e) {}
          }
        }
        return new XMLHttpRequest;
      }

      function inlineHtml(href, container) {
        var xhr = makeXhr();
        xhr.open('GET', href, false);
        xhr.send(null);
        if (xhr.status !== 200 && xhr.status !== 0) {
          throw new Error('Failed to load ' + href + ' : ' + xhr.status);
        }
        var htmlAndScript = xhr.responseText.match(
            /^([\s\S]*?)<script[^>]*>([\s\S]*?)<\/script>$/);
        var div = container.ownerDocument.createElement('DIV');
        div.innerHTML = htmlAndScript[1];
        while (div.firstChild) { container.appendChild(div.firstChild); }
        (new Function(htmlAndScript[2]))();
      }
    </script>

    <script type="text/javascript">
      // inlineHtml("dom_test.vo.html", document.getElementById('gadget___'));
    </script>

    <script src="../cajoled/utilities.vo.js"></script>
    <script src="../cajoled/selector.vo.js"></script>
    <script src="../cajoled/yuitest.vo.js"></script>
    <script src="../cajoled/cookie.vo.js"></script>
    <script src="../cajoled/profiler.vo.js"></script>
    <script src="../cajoled/datasource.vo.js"></script>

    <div id="gadget___">
    <?php include("../cajoled/" . $test . "_test.vo..out.html"); ?>
    </div>

    <script src="../cajoled/<?php echo $test ?>_test.vo..out.js"></script>


  </body>
</html>
