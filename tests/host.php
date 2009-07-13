<?php
    $suffix = 'test';
    $base = '../cajoled';
    $caja_base = '../../google-caja';

    $scripts = array();
    $css = array();
    $test = $bodyClass = '';
    
    if (isset($_GET['caja_base'])) {
        $caja_base = $_GET['caja_base'];
    }

    add('utilities');
    add('yuitest');

    if (isset($_GET['suffix'])) {
        $suffix = $_GET['suffix'];
    }

    if (isset($_GET['base'])) {
        $base = $_GET['base'];
    }

    if (isset($_GET['include'])) {
        array_map("add", split(',',$_GET['include']));
    }

    if (isset($_GET['css'])) {
        array_map("addCSS", split(',',$_GET['css']));
    }

    if (isset($_GET['test'])) {
        $test = $_GET['test'];
        add($test);
        add("{$test}_$suffix");
    }

    function add($file) {
        global $scripts, $base;

        $f = "$base/$file.vo..out.js";
        if (file_exists($f)) {
            $scripts[] = "<script src='$f'></script>";
        }

        addCSS($file);
    }
    function addCSS($file) {
        global $css, $bodyClass;

        $f = "../../yui2/build/$file/assets/skins/sam/$file.css";
        if (file_exists($f)) {
            $css[] = "<link rel='stylesheet' type='text/css' href='$f'>";
            $bodyClass = ' class="yui-skin-sam"';
        }
    }
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>

    <title>YUI/Caja Host Page</title>
    <?php echo(join("\n",array_unique($css))); ?>

    <!--[if lt IE 8]>
    <script type='text/javascript' src='http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js'></script>
    <![endif]-->
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
  <body<?php echo($bodyClass); ?>>

    <div id="gadget___" class="gadget___">
    <?php include("$base/{$test}_$suffix.vo..out.html"); ?>
    </div>

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

    <?php echo(join("\n",array_unique($scripts))); ?>

  </body>
</html>
