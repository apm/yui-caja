(function () {

var Dom = YAHOO.util.Dom,
    notes = YAHOO.namespace('caja').notes || {},
    note_tmpl    = '<button type="button" class="notes">{label}</button>',
    yuitest_tmpl = '<a href="'+YAHOO.caja.host+'{url}">run</a>',
    example_tmpl = '<button type="button" class="examples" '+
                        'title="List examples">{label}</button>',
    failed_tmpl  = '<button type="button" class="failed" '+
                        'title="Show failure info">{label}</button>',
    error_tmpl   = '<button type="button" class="errors" '+
                        'title="Show test error info">{label}</button>';

function tmpl(template,content) {
    return template.replace(/\{\w+\}/,content);
}

function module_link(cell, rec, col, data) {
    cell.innerHTML = notes[data] ? tmpl(note_tmpl, data) : data;
}

function yuitest_link(cell, rec, col, data) {
    cell.innerHTML = data === true ?
        tmpl(yuitest_tmpl, rec.getData('files').yuitest) :
        (data === false ? 'not found' : data);
}

function examples_link(cell, rec, col, data) {
    var examples = rec.getData('files').examples || {},
        count = 0, k,
        k, label;

    for (k in examples) {
        if (examples.hasOwnProperty(k)) {
            count++;
        }
    }

    label = count + '/' + data;

    cell.innerHTML = count ? tmpl(example_tmpl, label) : label;
}

function failed_test_link(cell, rec, col, data) {
    cell.innerHTML = data ? tmpl(failed_tmpl, data) : data;
}

function test_errors_link(cell, rec, col, data) {
    cell.innerHTML = data ? tmpl(error_tmpl, data) : data;
}

function format_detail_links(_,uri,label) {
    return '<a href="' + (
        uri.charAt(0) === '#' ?
            ('http://code.google.com/p/google-caja/issues/detail?id=' + uri.slice(1)) :
            (YAHOO.caja.host + uri)) + '">' + label + '</a>';
}

var dt = YAHOO.caja.statusTable = new YAHOO.widget.DataTable('tbl',[
    { key: 'module', formatter: module_link },
    { key: 'yuitest', formatter: yuitest_link },
    { key: 'examples', formatter: examples_link }, 
    { label: 'test results', children: [
        { key: 'tests[0]', label: 'pass' },
        { key: 'tests[1]', label: 'fail', formatter: failed_test_link },
        { key: 'tests[2]', label: 'error', formatter: test_errors_link }
    ]}],
    new YAHOO.util.LocalDataSource(YAHOO.caja, {
        responseType: YAHOO.util.DataSource.TYPE_JSON,
        responseSchema: {
            resultsList: 'data',
            fields: [
                'module',
                { key: 'yuitest' },
                { key: 'examples', parser: 'number' },
                { key: 'tests[0]', parser: 'number' },
                { key: 'tests[1]', parser: 'number' },
                { key: 'tests[2]', parser: 'number' },
                'files']
        }}));

dt.subscribe('buttonClickEvent', function (e) {
    var rec = this.getRecord(e.target),
        type = e.target.className,
        content, html, k;
        
    if (type === 'examples') {
        content = rec.getData('files').examples;
        html = [];
        for (k in content) {
            if (content.hasOwnProperty(k)) {
                html.push("[["+content[k]+"]"+k+"]");
            }
        }
        content = html;
    } else {
        YAHOO.caja[e.target.className][rec.getData('module')];
    }
        
    if (content) {
        html = "<ul><li><pre>" +
                content.join("</pre></li><li><pre>") +
               "</pre></li></ul>";

        html = html.replace(/\[\[(.*?)\](.*?)\]/gm, format_detail_links);

        document.getElementById('details').innerHTML = html;
    }
});

})();
