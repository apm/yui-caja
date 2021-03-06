<?php
    $base      = '../cajoled';
    $caja_base = '../../google-caja';

    $fblite    = false;
    $test      = '';
    
    if (isset($_GET['caja_base'])) {
        $caja_base = $_GET['caja_base'];
    }

    if (isset($_GET['base'])) {
        $base = $_GET['base'];
    }

    if (isset($_GET['fblite'])) {
        $fblite = $_GET['fblite'];
    }

    if (isset($_GET['test'])) {
        $f = "$base/".$_GET['test'].".vo..out";
        if (file_exists("$f.js")) {
            $test = $f;
        }
    }
?>
<!doctype html>
<html>
  <head>

    <title>YUI/Caja Host Page</title>
    <style type="text/css">
    body, html { margin: 0; padding: 0; }
    </style>
    <?php
    if ($fblite) {
    echo <<<END
    <!--[if lt IE 8]>
    <script type='text/javascript' src='http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js'></script>
    <![endif]-->
END;
    }
    ?>
    <script>
        if (!window.console &&
            Object.prototype.toString.call(window.opera) === '[object Opera]') {
            window.console = {
                log : function () { opera.postError(arguments.join(' ')); },
                warn : function () { opera.postError('WARN: ' + arguments.join(' ')); },
                error : function () { opera.postError('ERROR: ' + arguments.join(' ')); }
            }
        }
    </script>
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

    <div id="gadget___" class="gadget___"><!-- style="overflow: auto;"-->
        <div class="yui-skin-sam" id="gadget_body___">
            <?php include("$test.html"); ?>
        </div>
    </div>

    <script>(function () {
      document.getElementById('gadget_body___').style.height = document.documentElement.clientHeight + 'px';

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

      testImports.htmlEmitter___ = new HtmlEmitter(testDomContainer, testImports.document);
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

    <script src="<?php echo $test; ?>.js"></script>

  </body>
</html>
