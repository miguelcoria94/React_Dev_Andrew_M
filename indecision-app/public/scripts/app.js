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

ReactDOM.render(template2, appRoot);
