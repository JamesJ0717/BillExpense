import React, { Component } from "react";

import Bill from "./Components/Bill";
import Header from "./Components/Layout/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <Bill />
        </header>
      </div>
    );
  }
}

export default App;
