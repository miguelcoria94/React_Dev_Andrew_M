"use strict";

console.log("app is running");

// JSX - Javascript XML

var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
