import React, { Component } from "react";
import Router from "Components/Router";
import Hearder from "Components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Hearder />
        <Router />
      </div>
    );
  }
}

export default App;
