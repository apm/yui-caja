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
    <link type="text/css" rel="stylesheet" href="css/status.css">
</head>
<body class="yui-skin-sam">
<form action="">
<div>
    <label for="base">Caja base:</label>
    <input type="text" name="caja_base" value="<?php echo($caja_base); ?>">
    <button type="submit">Update</button>
</div>
</form>
<div class="content">
    <ul id="legend">
        <li class="working">Tested and approved for general use.</li>
        <li class="conditional">Mostly functional. See notes.</li>
        <li class="wip">Work in progress.</li>
        <li class="pending">Work pending.</li>
        <li class="unsupported">Unsupported or not expected to work.</li>
    </ul>
    <h2>YUI Core</h2>
    <div id="core"></div>

    <h2>Utilities</h2>
    <div id="utils"></div>

    <h2>Widgets</h2>
    <div id="widgets"></div>

    <a href="host.php?caja_base=<?php echo $caja_base; ?>&test=basic">Run basic test</a>
</div>
<script src="../../yui2/build/yahoo-dom-event/yahoo-dom-event.js"></script>
<script src="../../yui2/build/element/element-min.js"></script>
<script src="../../yui2/build/datasource/datasource-min.js"></script>
<script src="../../yui2/build/datatable/datatable-min.js"></script>
<script>YAHOO.namespace('caja').host = 'host.php?caja_base=<?php echo $caja_base; ?>&';</script>
<script src="js/data.js"></script>
<script src="js/notes.js"></script>
<script src="js/examples.js"></script>
<script src="js/failed.js"></script>
<script src="js/errors.js"></script>
<script src="js/status.js"></script>
</body>
</html>
