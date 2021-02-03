"use strict";

console.log("app is running");

// JSX - Javascript XML

var app = {
    title: "Indecision App",
    subtitle: "Let the app decide",
    options: ['One', 'Two']
};

var submitForm = function submitForm(e) {
    e.preventDefault();
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
    ),
    React.createElement(
        "form",
        { onSubmit: submitForm },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
            "button",
            { type: "submit" },
            "Add Option"
        )
    )
);

var appRoot = document.querySelector("#app");
ReactDOM.render(template, appRoot);
