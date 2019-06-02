import React, { Component } from "react";
import Axios from "axios";

export default class AddBill extends Component {
  state = {
    title: "",
    amount: "",
    due: ""
  };

  inputStyle = () => {
    return {
      width: "50%",
      border: "2px #444 dotted",
      fontSize: "12pt"
    };
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    Axios.post("http://67.242.41.128:3001/Bill", {
      title: this.state.title,
      amount: this.state.amount,
      due: this.state.due
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form style={this.inputStyle()} onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="New Bill"
            value={this.state.title}
            onChange={this.onChange}
          />{" "}
          <br />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="due"
            placeholder="Due Date"
            value={this.state.due}
            onChange={this.onChange}
          />
          <br />
          <input type="submit" placeholder="Submit" className="btn" />
        </form>
      </div>
    );
  }
}
