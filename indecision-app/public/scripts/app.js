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

var removeAll = function removeAll() {
    for (var i = app.options.length - 1; i >= 0; i--) {
        app.options.pop();
    }
    renderApp();
};

var makeDecision = function makeDecision() {
    var randNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randNum];
    console.log(randNum);
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
            "button",
            { disabled: app.options.length === 0, onClick: makeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove All"
        ),
        app.options.map(function (el, idx) {
            return React.createElement(
                "p",
                { key: idx },
                el
            );
        }),
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
