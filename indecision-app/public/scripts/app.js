"use strict";

console.log("app is running");

// JSX - Javascript XML

var app = {
    title: "Indecision App",
    subtitle: "Let the app decide",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options" : "You have no options"
    )
);

var count = 0;

var addOne = function addOne() {
    count++;
    renderCount();
};

var minusOne = function minusOne() {
    count--;
    renderCount();
};

var resetOne = function resetOne() {
    count = 0;
    renderCount();
};

var appRoot = document.getElementById("app");

var renderCount = function renderCount() {
    var counter = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            { id: "count" },
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { id: "my-id-1", className: "button", onClick: addOne },
            "plus one"
        ),
        React.createElement(
            "button",
            { id: "my-id-2", className: "button", onClick: minusOne },
            "minus one"
        ),
        React.createElement(
            "button",
            { id: "my-id-3", className: "button", onClick: resetOne },
            "reset count"
        )
    );
    ReactDOM.render(counter, appRoot);
};

renderCount();
