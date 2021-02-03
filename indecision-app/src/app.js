console.log("app is running");

// JSX - Javascript XML

const template = (
    <div>
        <h1>Miguel Coria</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item two</li>
        </ol>
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);