import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Clock from './Clock'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hello" };
  }

  // props -> state
  // static getDerivedStateFromProps(props, state) {
  //   return { text: props.text }
  // }

  // after render, change state
  // componentDidMount() {
  //   setTimeout( () => {
  //     this.setState({ text: "TIME OUT" });
  //   }, 3000);
  // }

  render() {
    return (
      <div className="App">
        <h1>{<p>qwe</p>}</h1>
      </div>
    );
  }
}

export default App;
