<?php
    $caja_base = '../../google-caja';

    if (isset($_GET['caja_base'])) {
        $caja_base = $_GET['caja_base'];
    }
?>
<!doctype html>
<html>
<head>
    <title>Directory</title>
    <link type="text/css" rel="stylesheet" href="../../yui2/build/datatable/assets/skins/sam/datatable.css">
    <style type="text/css">
        body {
            font: normal 83%/1.4 Arial, sans-serif;
            padding: 0;
            margin: 0;
        }
        form {
            background: #333;
            border-bottom: 3px solid #111;
            color: #fff;
            padding: 10px 15px;
        }
        h2 {
            color: #684;
            line-height: 1.1;
            margin: 1em 20px 0;
            border-bottom: 1px solid #aaa;
        }
        ul {
            list-style: none;
            margin: 1em 0 0 20px;
            padding: 0;
        }
        #tbl {
            margin: 1em 0 0 20px;
        }
        #details {
            float: right;
            margin-right: 2em;
            max-width: 400px;
        }
        #details pre {
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
</head>
<body class="yui-skin-sam">
<form action="">
<div>
    <label for="base">Caja base:</label>
    <input type="text" name="caja_base" value="<?php echo($caja_base); ?>">
    <button type="submit">Update</button>
</div>
</form>
<h2>Status</h2>
<div id="details"></div>
<div id="tbl"></div>
<a href="host.php?caja_base=<?php echo $caja_base; ?>&test=basic">Run basic test</a>
<script src="../../yui2/build/yahoo-dom-event/yahoo-dom-event.js"></script>
<script src="../../yui2/build/element/element-min.js"></script>
<script src="../../yui2/build/datasource/datasource-min.js"></script>
<script src="../../yui2/build/datatable/datatable-min.js"></script>
<script>YAHOO.namespace('caja').host = 'host.php?caja_base=<?php echo $caja_base; ?>&';</script>
<script src="js/data.js"></script>
<script src="js/notes.js"></script>
<script src="js/failed.js"></script>
<script src="js/errors.js"></script>
<script src="js/status.js"></script>
</body>
</html>
