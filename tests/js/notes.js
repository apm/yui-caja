YAHOO.namespace('caja').notes = {
    animation: [
        'Tests appear to be passing before the animations complete.  But the animations are completing',
        'Glowing Button example uses ColorAnim.  Not working.'
    ],
    autocomplete: [
        '<del>[[#1074]el.appendChild(el2) return undefined]</del>',
        '<del>[[#1075]focus/blur listeners not executed]</del> (fixed?) (workaround found in tests/examples/ac_basic_array_clean.html)'
    ],
    button: [
        "Glowing button example isn't glowing.  ColorAnim is pesent and no errors are thrown.",
        "Slider in Slider Button example isn't interactive.  Throws an odd error",
        "ARIA example menu button throwing an error.  Likely related to [[#1092]parentNode of off DOM elements reporting null].  This bug is marked fixed.  Not in Felix's port yet?",
        "min-height: auto removed decrying bad value",
        ":visited { padding, font-size, line-height, min-height } not allowed",
        "body class removed when folding html in cajole_html.  Wrapper element classed with .gadget___.  CSS cajoled so .yui-skin-sam => .gadget___ .yui-skin-sam.  Skin is not applied because no wrapping element has .yui-skin-sam.  Adding .yui-skin-sam to the host page's body doesn't work because it would need .yui-skin-sam .gadget___.  I had to insert a new wrapper element inside .gadget___ before the include of the cajoled code.  Is this the recommended fix?"
    ],
    calendar: [
        'YUI Test suite stopped several times at the debugger statement in domita (or was that in cajita?)',
        '[[#1095]link.blur() throws an error] which kills cell click callback operation',
        "[[#1120]Missing document.compatMode] may be causing some positioning issues"
    ],
    connection: [
        '[[suffix=gadget&test=connection]Simple example] as test works',
        'Weather feed example fails because [[#1073]o.responseXML is {}]',
        '<del>yuitest errors because [[#1064]form API missing]</del>'
    ],
    container: [
        'Default resize monitor setting is <code>true</code>, and is powered by an iframe, which is not allowed.',
        "testMethods test fails because [[#1092]Caja does not correctly report parentNode for off-DOM elements].  The portion of the test that this affects was commented out.",
        "Panel and Dialog examples are constraining inside a smaller region",
        "[[#1120]Missing document.compatMode] may be causing some positioning issues"
    ],
    cookie: ['Cookies are not supported in Caja'],
    dragdrop: [
        'Inner drag handles work, but mouse activity can disconnect with element, causing the element to stay put while the mouse moves around.  Mouseup does not change this.  In fact, after disconnect, mouseover will latch on to the element again despite button state.'
    ],
    dom: [
        '<del>Dom.get(Element instance) fails because [[#1066]nodes expose a length property]</del>',
        '[[#1069]fontFamily support is limited] - families must be quoted',
        "<del>[[#1066]node.setAttribute('for',x) does not propagate to node.htmlFor]</del>",
        "<del>[[#1120]Dom.getClientHeight, Width, etc don't work] because both doc.compatMode and document.documentElement are undefined</del>",
        "[[#1124]Dom.getClientHeight, Width, etc don't work] because document.documentElement refers to a div, so clientHeight reflects flowed content dims"
    ],
    event: [
        "Mouseenter and Mouseleave events appear to be working in FF3.5.4 (based on manual test), so noted in pass column"
    ],
    editor: [
        "[[#1120]Missing document.compatMode] may be causing some issues"
    ],
    datatable: [
        "Column resizing won't work because the two ways to accomplish the task (dynamic stylesheets and generated Function) are both verboten in Caja"
    ],
    get: [
        "No expectation for this to work, though that may change"
    ],
    history: [
        "No expectation for this to work"
    ],
    imageloader: [
        "YUI Test not cajoling because of 'malformed URLs'.  Felix may patch cajoler to accept arbitrary urls",
        "[[#1120]Missing document.compatMode] may be causing some issues"
    ],
    json: [
        "Parse won't work because it uses eval.  Caja exposes a JSON object, so if it could [[#1086]report 'object JSON' to the Miller device], JSON util would work unmodified"
    ],
    layout: [
        "Full page layout and Layout with Menus examples are displaying as a blank page because <del>Caja doesn't grant access to [[#1120]document.documentElement for getting clientHeight]</del> [[#1124]the gadget container (div) clientHeight is a poor substute for documentElement.clientHeight].  It doesn't take into account out of flow content.  LM uses abs positioning, so gadget div clientHeight is 0 because all content is out of flow.  Use element rooted Layout Managers for now."
    ],
    profiler: [
        "Should work except for passing eval strings to registerFunction etc"
    ],
    'reset-fonts-grids': [
        "[[#1103]body assignment stripped], so the baseline 13px font-size, 1.231 line-height, and font face are not normalized",
        "font-size: x-small removed (for IE quirks mode) is this relevant?",
        "font: 100% stripped from table selector as invalid value"
    ],
    resize: [
        "As with all DD implementations, the response time of dragging is hindered and DD may lose hold of the mouse moves"
    ],
    selector: [
        "Test suite code had to be moved out of a DOM0 window.onload handlerb ecause Caja never executed the code.  Probably doesn't support DOM0 onload?"
    ],
    yahoo: [
        "test_substitute failure because [[#1088]{}.toString !== Object.prototype.toString] in Caja.  This is causing trouble with substitute only when it leverages dump",
        "test failures related to iframes are expected",
        "isArray failure on node collection is expected",
    ]
};
