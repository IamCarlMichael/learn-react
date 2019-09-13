// Plain Vanilla JS:
// const app = document.querySelector("#app");
// app.textContent = "Woohoooo";
// const h1 = document.createElement("h1");
// h1.textContent = "JumpStart!";
// app.appendChild(h1);

// // jQuery:
// const h1 = $("<h1>").text("Hello, world!");
// $("#app").append(h1);

// // React:
// const h1 = React.createElement("h1", null, "Hello, world");
// const app = document.querySelector("#app");
// ReactDOM.render(h1, app);

// // // React 2 for lists:
// const app = document.querySelector("#app");
// const item1 = React.createElement("li", null, "my first item");
// const ol = React.createElement("ol", null, item1);
// ReactDOM.render(ol, app);

// // Using Babel(JSX) and react:
// const app = document.querySelector("#app");
// const ol = (
//   <ol>
//     <li>Item 1</li>
//     <li>Item 2</li>
//   </ol>
// );
// ReactDOM.render(ol, app);

// //JSX and Functions
// const app = document.querySelector("#app");

// const hi = <h1>Hello, world</h1>;
// function hello() {
//   return <h1>Hello, world in a component</h1>;
// }
// ReactDOM.render(hello(), app);

// //JSX and Functions 2
// const app = document.querySelector("#app");
// const hi = <h1>Hello, world</h1>;
// function Hello() {
//   return <h1>Hello, world in a component</h1>;
// }
// ReactDOM.render(<Hello />, app);

// // Button Applications

const root = document.querySelector("#app");
function App() {
  let counter = 0;

  const incrementCounter = () => {
    console.log("I was clicked");
  };

  return (
    <div>
      <h1>0</h1>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

ReactDOM.render(<App />, root);
