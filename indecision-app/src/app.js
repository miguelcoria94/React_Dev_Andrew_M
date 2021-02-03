console.log("app is running");

// JSX - Javascript XML

const app = {
    title: "Indecision App",
    subtitle: "Let the app decide"
}

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

const user = {
    name: 'Miguel Coria',
    age: 25,
    location: "Houston, TX"
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : ""}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);