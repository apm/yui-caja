YAHOO.namespace('caja').errors = {
    connection: [
        'YUI Test suite is focused on setForm, which is failing because of missing form API (see notes)'
    ],
    cookie: ['All failures are because cookies are not supported in Caja'],
    datasource: [
        "testLocalContruction: UnexpectedError: not found:\nActiveXObject"
    ],
    element: [
        "test_DomEvent: UnexpectedError: Unrecognized event type MouseEvents",
        "test_attribute: UnexpectedError: bad value `tahoma` for CSS property fontFamily (see notes)"
    ],
    json: ["All errors are because eval is not provided, so parse fails"],
    profiler: ["All errors are because eval is not provided, so parse fails"],
    selector: [
        "testSelector: UnexpectedError: callMethod: p, p,, has no method callee",
        "testOffDom: UnexpectedError: obj is null"
    ],
    yahoo: [
        "iframe related failures are expected",
        "test_is_array_xframe: UnexpectedError: not found: xframe",
        "test_is_function_xframe: UnexpectedError: not found: xframe",
        "test_is_object_xframe: UnexpectedError: not found: xframe"
    ],
    yuitest: [
        "testJsonFormat: UnexpectedError: Cannot read property \"stringify\" from undefined\nTODO: Does the yuitest need include=json?",
        "testXmlFormat: UnexpectedError: callMethod: [object Object] has no method callee",
        "everything iframe related (4)",
        "all MouseEvents tests (44)",
        "all KeyEvent tests (18)"
    ]
};
