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
    count ++
    console.log(count)
}

const minusOne = () => {
    count --
    console.log(count);
};

const resetOne = () => {
    count = 0
    console.log(count);
};



const counter = (
  <div>
    <h1>Count: {count}</h1>
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
const appRoot = document.getElementById("app");

ReactDOM.render(counter, appRoot);