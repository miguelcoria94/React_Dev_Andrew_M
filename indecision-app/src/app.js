console.log("app is running");

// JSX - Javascript XML

const app = {
    title: "Indecision App",
    subtitle: "Let the app decide",
    options: ['One', 'Two']
}

const submitForm = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}

const removeAll = () => {
    for (let i = app.options.length - 1; i >= 0; i--){
        app.options.pop()
    }
    renderApp();
}

const renderApp = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>
          {app.options.length > 0
            ? "Here are your options"
            : "You have no options"}
            </p>
            <button onClick={removeAll}>
                Remove All
            </button>
            {app.options.map(el => {
                return <p>{el}</p>
            })}
        <p>{app.options.length}</p>
        <form onSubmit={submitForm}>
          <input type="text" name="option"></input>
          <button type="submit">Add Option</button>
        </form>
      </div>
    );

    ReactDOM.render(template, appRoot);
}



const appRoot = document.querySelector("#app")
renderApp();