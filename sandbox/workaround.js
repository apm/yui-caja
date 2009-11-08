(function () {

var lang = YAHOO.lang,
    widget = YAHOO.widget,
    DataTable = (widget || {}).DataTable,
    Paginator = (widget || {}).Paginator,
    _TO_STRING = ({}).toString;

/**
 * YAHOO.lang.* patches
 */
// WORKAROUND: Caja bug #1077 - fn.apply(o) throws error in some browsers
lang.isArray = function (a) {
    return _TO_STRING.call(a) === '[object Array]';
};
lang.isFunction = function (f) {
    return (typeof f === 'function' ||
        _TO_STRING.call(f) === '[object Function]');
};



/**
 * DataTable patches
 */
if (DataTable) {
    // WORKAROUND: Caja bug #1153 - missing table API (cellIndex)
    DataTable.prototype._updateTrEl = function (row, rec) {
        var rowFormatter = this.get('formatRow'),
            cells = row.childNodes,
            i, len;

        if (!rowFormatter || rowFormatter.call(this, row, rec)) {
            // Hide the row to prevent constant reflows
            row.style.display = 'none';

            for (i = 0,len = cells.length; i < len; ++i) {
                // THIS BLOCK IS THE WORKAROUND
                if (typeof cells[i].cellIndex === 'undefined') {
                    cells[i].cellIndex = i;
                }

                // Set the cell content
                this.formatCell(cells[i].firstChild, rec, this._oColumnSet.keys[i]);
            }

            // Redisplay the row for reflow
            row.style.display = '';
        }

        row.id = rec.getId(); // Needed for Record association and tracking of FIRST/LAST
        return row;
    };



    //WORKAROUND: Caja bug #1153 (pt2) - missing table API (tbody.deleteRow)
    (function (render) {
        DataTable.prototype.render = function () {
            if (this._elTbody && !this._elTbody.deleteRow) {
                var tbody = this._elTbody;
                tbody.deleteRow = function (i) {
                    var row = i >= 0 ? tbody.childNodes[i] :
                        tbody.childNodes[ tbody.childNodes.length + i ];
                        
                    if (row) {
                        tbody.removeChild(row);
                    }
                };
            }
            return render.apply(this, arguments);
        };
    })(DataTable.prototype.render);



    //WORKAROUND: Caja bug #1154 - sel.options.selectedIndex undefined
    widget.DropdownCellEditor.prototype.getInputValue = function () {
        var sel  = this.dropdown,
            opts = sel.options,
            values,
            i;
       
        // Look for multiple selections
        if(this.multiple) {
            values = [];

            for(i = opts.length - 1; i >= 0; --i) {
                if(opts[i].selected) {
                    values.unshift(opts[i].value);
                }
            }

            return values;
        } else {
            // THIS LINE IS THE WORKAROUND
            return opts[sel.selectedIndex].value;
        }
    };
}



/**
 * Paginator patches
 */
if (Paginator) {
    // WORKAROUND: Caja bug #1041/933 - no expando support from markup
    Paginator.ui.PageLinks.prototype.update = function (e) {
        if (e && e.prevValue === e.newValue) {
            return;
        }

        var p = this.paginator,
            currentPage = p.getCurrentPage(),
            labelBuilder, range, pageLinkClass,
            df, tmpl, pageLink,
            start, end, i;
            
        if (this.current !== currentPage|| !currentPage || e.rebuild) {
            labelBuilder = p.get('pageLabelBuilder');
            pageLinkClass = p.get('pageLinkClass');
            range = Paginator.ui.PageLinks.calculateRange(
                        currentPage,
                        p.getTotalPages(),
                        p.get('pageLinks'));
            start = range[0];
            end   = range[1];

            tmpl  = document.createElement('a');
            tmpl.href = '#';
            tmpl.className = p.get('pageLinkClass');

            df = document.createDocumentFragment();

            for (i = start; i <= end; ++i) {
                if (i === currentPage) {
                    pageLink = document.createElement('span');
                    pageLink.className = p.get('currentPageClass') + ' ' +
                                         p.get('pageLinkClass');
                    pageLink.innerHTML = labelBuilder(i,p);
                } else {
                    pageLink = tmpl.cloneNode(false);
                    pageLink.setAttribute('page',i);
                    pageLink.innerHTML = labelBuilder(i,p);
                }

                df.appendChild(pageLink);
            }

            this.container.innerHTML = '';
            this.container.appendChild(df);
        }
    };
}

})();
