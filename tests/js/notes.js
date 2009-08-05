YAHOO.namespace('caja').notes = {
    animation: [
        'Tests appear to be passing before the animations complete.  But the animations are completing',
        'Glowing Button example uses ColorAnim.  Not working.'
    ],
    autocomplete: [
        'Bug #1074 el.appendChild(el2) return undefined (fixed)',
        'Bug #1075 focus/blur listeners not executed (fixed?) (workaround found n tests/examples/ac_basic_array_clean.html)'
    ],
    button: [
        "Glowing button example isn't glowing.  ColorAnim is pesent and no errors are thrown.",
        "Slider in Slider Button example isn't interactive.  Throws an odd error",
        "ARIA example menu button throwing an error.  Likely related to [[#1092]parentNode of off DOM elements reporting null].  This bug is marked fixed.  Not in Felix's port yet?"
    ],
    calendar: [
        'YUI Test suite stopped several times at the debugger statement in domita (or was that in cajita?)',
        '[[#1095]link.blur() throws an error] which kills cell click callback operation'
    ],
    connection: [
        '[[suffix=gadget&test=connection]Simple example] as test works',
        'Weather feed example fails because [[#1073]o.responseXML is {}]',
        'yuitest errors because [[#1064]form API missing]'
    ],
    container: [
        'Default resize monitor setting is <code>true</code>, and is powered by an iframe, which is not allowed.',
        "testMethods test fails because [[#1092]Caja does not correctly report parentNode for off-DOM elements].  The portion of the test that this affects was commented out.",
        "Panel and Dialog examples are constraining inside a smaller region"
    ],
    cookie: ['Cookies are not supported in Caja'],
    dragdrop: [
        'Inner drag handles work, but mouse activity can disconnect with element, causing the element to stay put while the mouse moves around.  Mouseup does not change this.  In fact, after disconnect, mouseover will latch on to the element again despite button state.'
    ],
    dom: [
        '<del>Dom.get(Element instance) fails because [[#1066]nodes expose a length property]</del>',
        '[[#1069]fontFamily support is limited]',
        "[[#1066]node.setAttribute('for',x) does not propagate to node.htmlFor]"
    ],
    get: [
        "No expectation for this to work, though that may change"
    ],
    history: [
        "No expectation for this to work"
    ],
    imageloader: [
        "YUI Test not cajoling because of 'malformed URLs'.  Felix may patch cajoler to accept arbitrary urls"
    ],
    json: [
        "Parse won't work because it uses eval.  Caja exposes a JSON object, so if it could [[#1086]report 'object JSON' to the Miller device], JSON util would work unmodified"
    ],
    layout: [
        "Full page layout and Layout with Menus examples are displaying as a blank page.  The DOM is there, but some elements are sized height: 0.  Investigation pending."
    ],
    profiler: [
        "Should work except for passing eval strings to registerFunction etc"
    ],
    resize: [
        "As with all DD implementations, the response time of dragging is hindered and DD may lose hold of the mouse moves"
    ],
    yahoo: [
        "test_substitute failure because [[#1088]{}.toString !== Object.prototype.toString] in Caja.  This is causing trouble with substitute only when it leverages dump",
        "test failures related to iframes are expected",
        "isArray failure on node collection is expected",
    ]
};
