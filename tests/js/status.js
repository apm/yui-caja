(function () {

var Dom = YAHOO.util.Dom,
    Yc  = YAHOO.caja;

function module(cell, rec, col, data) {
    Dom.addClass(cell, rec.getData('status'));
    cell.innerHTML = data;
}

function yuitests(cell, rec, col, data) {
    var html = YAHOO.lang.isArray(data) ? data.join(" ") :
            data === false ? "Not found" :
            /test=/.test(data) ? "[["+data+"]run]" :
            data;

    cell.innerHTML = html.replace(/\[\[(.*?)\](.*?)\]/gm,format_detail_links);
}

function examples(cell, rec, col, data) {
    var examples = (Yc.examples[rec.getData('module')] || []).length;

    cell.innerHTML = examples;
    if (examples) {
        Dom.addClass(cell,'has-examples');
    }
}

function failed_tests(cell, rec, col, data) {
    cell.innerHTML = data;
    if (+data) {
        Dom.addClass(cell,'has-failed');
    }
}

function test_errors(cell, rec, col, data) {
    cell.innerHTML = data;
    if (+data) {
        Dom.addClass(cell, 'has-errors');
    }
}

function notes_button(cell, rec, col, data) {
    var module = rec.getData('module'),
        hasNotes = Yc.notes[module] || Yc.examples[module] ||
                   Yc.failed[module] || Yc.errors[module];

    cell.innerHTML = hasNotes ?
        '<button type="button" class="notes"><span>notes</span></button>':
        '';
}

function format_detail_links(_,uri,label) {
    return '<a href="' + (
        uri.charAt(0) === '#' ?
            ('http://code.google.com/p/google-caja/issues/detail?id=' + uri.slice(1)) :
            (YAHOO.caja.host + 'test=' + uri)) + '">' + label + '</a>';
}

function expand(row, rec) {
    var tr = document.createElement('tr'),
        td = tr.appendChild(document.createElement('td')),
        div = td.appendChild(document.createElement('div')),
        module = rec.getData('module'),
        sections = ['examples','failed','errors','notes'],i,s,
        sectionCount = 0,
        html = '';

    Dom.addClass(tr, /yui-dt-(?:odd|even)/.exec(row.className)[0]);
    td.colSpan = row.cells.length;
    td.className = 'details';
    
    Dom.addClass(div, 'yui-dt-liner');
    Dom.addClass(div, rec.getData('status'));

    for (i = 0; i < 4; ++i) {
        s = Yc[sections[i]][module];
        if (s) {
            sectionCount++;
            html += '<div><h4>' + sections[i].toUpperCase() + '</h4>' +
                    '<ul><li>' + s.join('</li><li>') + '</li></ul></div>';
        }
    }
        
    if (html) {
        Dom.addClass(td,'col' + sectionCount);
        div.innerHTML = html.replace(/\[\[(.*?)\](.*?)\]/gm,format_detail_links);

        row.parentNode.insertBefore(tr, row.nextSibling);
    }
}

function collapse(row) {
    row.parentNode.removeChild(row);
}

function initTable(section) {
var dt = YAHOO.caja[section + 'Table'] = new YAHOO.widget.DataTable(section,[
    { key: 'module', formatter: module },
    { key: 'yuitest', formatter: yuitests },
    { label: 'examples &amp; tests', formatter: examples }, 
    { label: 'test results', children: [
        { key: 'tests[0]', label: 'pass' },
        { key: 'tests[1]', label: 'fail', formatter: failed_tests },
        { key: 'tests[2]', label: 'error', formatter: test_errors }
    ]},
    { label: 'notes', formatter: notes_button }],
    new YAHOO.util.LocalDataSource(YAHOO.caja.data, {
        responseType: YAHOO.util.DataSource.TYPE_JSON,
        responseSchema: {
            resultsList: section,
            fields: [
                'module',
                { key: 'yuitest' },
                { key: 'examples', parser: 'number' },
                { key: 'tests[0]', parser: 'number' },
                { key: 'tests[1]', parser: 'number' },
                { key: 'tests[2]', parser: 'number' },
                'status']
        }}));

//dt.sortColumn('module', YAHOO.widget.DataTable.CLASS_ASC);

dt.subscribe('buttonClickEvent', function (e) {
    var rec = this.getRecord(e.target),
        row = this.getTrEl(rec),
        type = e.target.className;
        
    if (Dom.hasClass(row, 'show-details')) {
        collapse(row.nextSibling);
        Dom.removeClass(row, 'show-details');
    } else {
        expand(row, rec);
        Dom.addClass(row, 'show-details');
    }

});
}

initTable('core');
initTable('utils');
initTable('widgets');

})();
