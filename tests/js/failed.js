YAHOO.namespace('caja').failed = {
    cookie: ['All failures are because cookies are not supported in Caja'],
    dragdrop: [
        "test_dragOver: dragOver should have fired 5 times\nExpected: 5 (number)\nActual:7 (number)",
        "test_bodyScroll: dragOver should have fired 5 times\nExpected: 5 (number)\nActual:7 (number)",
        "test_containerScroll: dragOver should have fired 5 times\nExpected: 5 (number)\nActual:7 (number)",
    ],
    dom: [
        "test_replaceClass: Y.Dom.replaceClass(el, /bar/, 'baz')\nExpected: foo baz (string)\nActual:foo  baz (string)",
        "test_getAttribute: Unexpected error: invalid \"in\" operand: null"
    ],
    event: [
        "Focus and Blur Test not working.  I suspect issues with capture phase support (needs investigation)",
        "All 6 of the focusin, focusout tests (event test 2) fail (need investigation)",
        "All 11 of the event delegation tests fail because of lack of support for event simulation."
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
