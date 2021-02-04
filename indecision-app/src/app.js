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

const makeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randNum]
    console.log(randNum)
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
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>
                Remove All
            </button>
            {app.options.map((el, idx) => {
                return <p key={idx}>{el}</p>
            })}
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