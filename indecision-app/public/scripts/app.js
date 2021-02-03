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

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var renderApp = function renderApp() {
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
            "p",
            null,
            app.options.length
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

    ReactDOM.render(template, appRoot);
};

var appRoot = document.querySelector("#app");
renderApp();
