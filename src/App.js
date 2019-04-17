import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";

class App extends Component {
  constructor(){
    super()
    this.state = {
      API:  sample
    };
  }
  handleClick = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => { this. setState({ API: data[0]})})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleClick} className="btn">
            SWITCH
          </button>
        <Quote API={this.state.API} />
        </header>
      </div>
    );
  }
}

const sample = {
  quote : "I believe the children are the future... Unless we stop them now!",
  character : "Homer Simpson",
  image : 'https://i.dlpng.com/static/png/15389_thumb.png'
}



export default App;