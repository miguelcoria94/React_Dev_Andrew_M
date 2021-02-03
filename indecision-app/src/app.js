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
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        <p>Age: {user.age && user.age > 18 ? user.age : "under aged"}</p>
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);