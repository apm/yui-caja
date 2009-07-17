<?php
    $caja_base = '../../google-caja';

    if (isset($_GET['caja_base'])) {
        $caja_base = $_GET['caja_base'];
    }

    $yuitests = array(
        'YAHOO Global' => array('test' => 'yahoo'),
        'Dom' => array('test' => 'dom'),
        'Selector' => array('test' => 'selector'),
        'Animation' => array('test' => 'animation'),
        'DataSource' => array('test' => 'datasource'),
        'DragDrop' => array('test' => 'dd'),
        'Element' => array('test' => 'element'),
        'YUITest' => array('test' => 'yuitest'),
        'Connection Manager (setForm)' => array('test' => 'connection'),
        'Cookie' => array('test' => 'cookie'),
        'Profiler' => array('test' => 'profiler'),
        'ImageLoader' => array('test' => 'imageloader'),
        'AutoComplete' => array('test' => 'autocomplete',
            'include' => 'datasource'),
        'TabView' => array('test' => 'tabview'),
        'Menu' => array('test' => 'menu',
            'include' => 'container'),
        'Slider' => array('test' => 'slider'),
    );

    $adhocs = array(
        'Events, lang, and extension' => array('test' => 'core'),
        'Resize' => array('test' => 'resize'),
        'Connection Manager' => array('test' => 'connection'),
        'JSON' => array('test' => 'json'),
        'TreeView' => array('test' => 'treeview'),
        'YUITest' => array('test' => 'yuitest'),
        'Basic test (used for bug repro)' => array('test' => 'basic', suffix => 'test' ),
    );

    $examples = array(
        'AutoComplete from local array' => array(
            'test' => 'autocomplete_basic_array',
            'include' => 'data,datasource,autocomplete'),
        'Connection Mgr GET' => array('test' => 'get'),
        'Connection Mgr POST' => array('test' => 'post'),
        'Connection Mgr abort' => array('test' => 'abort'),
        'Connection Mgr global custom events' => array('test' => 'global_customevents'),
        'Connection Mgr callback cutsom events' => array('test' => 'callback_customevents'),
        'Connection Mgr Weather RSS feed' => array('test' => 'weather'),
        'Event basics' => array('test' => 'eventsimple'),
        'Event Custom events' => array('test' => 'custom-event'),
        'Event delegation' => array('test' => 'event-delegation'),
    );

    function buildLink($item,$suffix='') {
        global $caja_base;
        $link = "host.php?caja_base={$caja_base}&test={$item['test']}";
        if (isset($item["suffix"])) {
            $suffix = $item["suffix"];
        }
        if ($suffix) {
            $link .= "&suffix=$suffix";
        }
        if (isset($item["include"])) {
            $link .= "&include={$item['include']}";
        }

        return $link;
    }
?>
<!doctype html>
<html>
<head>
    <title>Directory</title>
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
    </style>
</head>
<body>
<form action="">
<div>
    <label for="base">Caja base:</label>
    <input type="text" name="caja_base" value="<?php echo($caja_base); ?>">
    <button type="submit">Update</button>
</div>
</form>
<h2>YUITest suites</h2>
<ul>
    <?php
        foreach ($yuitests as $label=>$item) {
            echo("<li><a href='".buildLink($item)."'>$label</a></li>");
        }
    ?>
</ul>
<h2>Adhoc Tests</h2>
<ul>
    <?php
        foreach ($adhocs as $label=>$item) {
            echo("<li><a href='".buildLink($item,'gadget')."'>$label</a></li>");
        }
    ?>
</ul>
<h2>Examples</h2>
<ul>
    <?php
        foreach ($examples as $label=>$item) {
            echo("<li><a href='".buildLink($item,'example')."'>$label</a></li>");
        }
    ?>
</ul>
</body>
</html>
