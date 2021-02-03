console.log("app is running");

// JSX - Javascript XML

const app = {
    title: "Indecision App",
    subtitle: "Let the app decide",
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "You have no options"}</p>
    </div>
);

let count = 0;

const counter = (
    <div>
        <h1>Count: {count}</h1>
    </div>
)
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);