import React from "react";

/**-------------------------- Lifecycle-------------------------*/
class Demo extends React.Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = { color: "green" };
  }
  componentWillMount() {
    console.log("run componentWillMount");
  }

  componentDidMount() {
    console.log("run componentDidMount");
  }

  render() {
    console.log("run render");
    return (
      <div>
        <button onClick={() => this.setState({ color: "aaaaa" })}>
          Submit
        </button>
        <p>{this.state.color}</p>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Demo></Demo>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
