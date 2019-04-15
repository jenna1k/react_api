import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";

class App extends Component {
  constructor(){
    super()
    this.state = {
      working : true
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const img = this.state.working ? 'http://pngimg.com/uploads/simpsons/simpsons_PNG92.png' : 'https://i.dlpng.com/static/png/15389_thumb.png';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working? "App-logo" : "App-logo-stop"} alt="logo" />
          <button onClick={this.handleClick} className="btn">
            SWITCH
          </button>
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image={img}
        />
        </header>
      </div>
    );
  }
}

export default App;