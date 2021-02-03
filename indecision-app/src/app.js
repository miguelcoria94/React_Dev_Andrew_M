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


const addOne = () => {
    count++
    renderCount()
}

const minusOne = () => {
    count --
    renderCount()
};

const resetOne = () => {
    count = 0
    renderCount()
};



const appRoot = document.getElementById("app");

const renderCount = () => {
    const counter = (
      <div>
        <h1 id="count">Count: {count}</h1>
        <button id="my-id-1" className="button" onClick={addOne}>
          plus one
        </button>
        <button id="my-id-2" className="button" onClick={minusOne}>
          minus one
        </button>
        <button id="my-id-3" className="button" onClick={resetOne}>
          reset count
        </button>
      </div>
    );
    ReactDOM.render(counter, appRoot);
}

renderCount()