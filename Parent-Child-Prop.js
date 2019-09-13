// // Parent Child example 1:
// const root = document.querySelector("#app");

// function Child(props) {
//   return (
//     <h1>
//       Hi, my name is {props.name} and I am {props.age} years old
//     </h1>
//   );
// }

// function Parent() {
//   return (
//     <div>
//       <Child name="Alice" age={9} />
//       <Child name="Bob" age={12} />
//     </div>
//   );
// }

// ReactDOM.render(<Parent />, root);

// // Convert function component to a Class component and trying state
const root = document.querySelector("#app");

function Child(props) {
  return (
    <h1>
      Hi, my name is {props.name} and I am {props.age} years old
    </h1>
  );
}

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      aliceAge: 9,
      bobAge: 12
    };
  }

  changeAge() {
    const newAge = Math.floor(Math.random() * 10);
    // this.state.aliceAge = newAge; //incorrect
    this.setState({ aliceAge: newAge }); //Correct
    // return Math.floor(Math.random() * 10);
  }

  render() {
    return (
      <div>
        <Child name="Alice" age={this.state.aliceAge} />
        <Child name="Bob" age={this.state.bobAge} />
        <button onClick={this.changeAge.bind(this)}>
          Click to change age of Alice
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Parent />, root);
