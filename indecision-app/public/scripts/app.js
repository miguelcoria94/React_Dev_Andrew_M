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

var user = {
    name: 'Miguel Coria',
    age: 25,
    location: "Houston, TX"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age && user.age > 18 ? user.age : "under aged"
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
