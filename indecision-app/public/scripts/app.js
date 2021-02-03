"use strict";

console.log("app is running");

// JSX - Javascript XML

var app = {
    title: "Indecision App",
    subtitle: "Let the app decide"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    )
);

var user = {
    name: 'Miky',
    age: 25,
    location: "Houston"
};
var userName = "Miguel Coria";
var userAge = 25;
var userLocation = "Houston, TX";

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
