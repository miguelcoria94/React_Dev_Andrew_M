console.log("app is running");

// JSX - Javascript XML

const app = {
    title: "Indecision App",
    subtitle: "Let the app decide",
    options: ['One', 'Two']
}

const submitForm = (e) => {
    e.preventDefault()
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "You have no options"}</p>
        <form onSubmit={submitForm}>
            <input type="text" name="option"></input>
            <button type="submit">Add Option</button>
        </form>
    </div>
);

const appRoot = document.querySelector("#app")
ReactDOM.render(template, appRoot);