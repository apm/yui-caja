YAHOO.namespace('caja').notes = {
    animation: ['Tests appear to be passing before the animations complete.  But the animations are completing'],
    autocomplete: [
        'Bug #1074 el.appendChild(el2) return undefined (fixed)',
        'Bug #1075 focus/blur listeners not executed (fixed?) (workaround found n tests/examples/ac_basic_array_clean.html)'
    ],
    connection: [
        '[[suffix=gadget&test=connection]Simple example] as test works',
        '4 YDN examples work, 1 Fails because [[#1073]o.responseXML is {}]',
        'yuitest errors because [[#1064]form API missing]'
    ],
    cookie: ['Cookies are not supported in Caja'],
    dragdrop: [
        'Inner drag handles work, but mouse activity can disconnect with element, causing the element to stay put while the mouse moves around.  Mouseup does not change this.  In fact, after disconnect, mouseover will latch on to the element again despite button state.'
    ],
    dom: [
        'Dom.get(Element instance) fails because [[#1066]nodes expose a length property]',
        '[[#1069]fontFamily support is limited]'
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
    profiler: [
        "Should work except for passing eval strings to registerFunction etc"
    ],
    resize: [
        "As with all DD implementations, the response time of dragging is hindered and DD may lose hold of the mouse moves"
    ],
    yahoo: [
        "[[#1088]{}.toString !== Object.prototype.toString] is causing trouble with substitute when it leverages dump"
    ]
};
