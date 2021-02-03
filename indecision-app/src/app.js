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

const template2 = (
    <div>
        <h1>Miguel Coria</h1>
        <p>Age: 25</p>
        <p>Location: Houston, Tx</p>
    </div>
)

const appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);