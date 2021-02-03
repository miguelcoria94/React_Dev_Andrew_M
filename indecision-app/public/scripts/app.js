"use strict";

console.log("app is running");

// JSX - Javascript XML

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Miguel Coria"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Miguel Coria"
    ),
    React.createElement(
        "p",
        null,
        "Age: 25"
    ),
    React.createElement(
        "p",
        null,
        "Location: Houston, Tx"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
