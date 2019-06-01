import React, { Component } from "react";

export default class Header extends Component {
  getStyle = () => {
    return {
      textAlign: "center"
    };
  };
  render() {
    return (
      <div>
        <header style={this.getStyle()}>
          <h3>Welcome to Bill Tracker!</h3>
        </header>
      </div>
    );
  }
}
