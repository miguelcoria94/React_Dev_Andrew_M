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

const user = {
    name: 'Miky',
    age: 25,
    location: "Houston"
}
const userName = "Miguel Coria";
const userAge = 25;
const userLocation = "Houston, TX";

const template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

const appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);