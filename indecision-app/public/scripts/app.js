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
        user.name ? user.name : ""
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
