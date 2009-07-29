YAHOO.namespace('caja').failed = {
    autocomplete: [
        "testExpandCollapseContainer: Expected container to be closed again\nExpected: (string)\nActual:none (string)"
    ],
    cookie: ['All failures are because cookies are not supported in Caja'],
    datasource: [
        "testXHRSendRequest: XHR failure case.",
        "testXHRHTMLTable: XHR failure case"
    ],
    dragdrop: [
        "test_dragOver: dragOver should have fired 5 times\nExpected: 5 (number)\nActual:7 (number)",
        "test_bodyScroll: dragOver should have fired 5 times\nExpected: 5 (number)\nActual:7 (number)",
        "test_containerScroll: dragOver should have fired 5 times\nExpected: 5 (number)\nActual:7 (number)",
    ],
    dom: [
        "test_setAttribute: Y.Dom.setAttribute(el, 'for', 'foo')\nExpected: foo (string)\nActual:undefined (undefined)"
    ],
    selector: [
        "testTest: type=checkbox:checked\nExpected: true (boolean)\nActual:false (boolean)",
        "testNthLastChild: 2n+1\nExpected: &lt;LI> (object)\nActual:undefined (undefined)",
        "testNthType: odd\nExpected: &lt;LI> (object)\nActual:undefined (undefined)",
        "testNthChild: 3n+1\nExpected: &lt;LI> (object)\nActual:undefined (undefined)",
        "testPseudo: contains(demo2)\nExpected: true (boolean)\nActual:false (boolean)",
        "testAttr: [title=\"this is a [demo]\"]\nExpected: true (boolean)\nActual:false (boolean)"
    ],
    yahoo: [
        "test_config: Values in position 0 are not equal.\n Expected: yahoo (string)\n Actual:undefined (undefined) NEEDS INVESTIGATION",
        "test_is_array: Element collections are array-like, but not arrays\n Expected: false (boolean)\n Actual:true (boolean)",
        "test_substitute: failed one level object dump Expected: {level1_1 => 1.1, level1_2 => 1.2, level1_3 => {...}, level1_4 => 1.4} (string)\n Actual:[object Object] (string)"
    ]
};
