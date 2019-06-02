import React, { Component } from "react";
import Axios from "axios";

import AddBill from "./AddBill";

class Bill extends Component {
  state = {
    bills: []
  };

  componentDidMount() {
    Axios.get("http://67.242.41.128:3001/Bill")
      .then(res => {
        console.log(res.data);
        this.setState({ bills: res.data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  rowStyle = () => {
    return {
      textAlign: "right",
      border: "1px #ccc dotted",
      paddign: "0px"
    };
  };

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "5px",
      borderBottom: "1px #ccc dotted",
      width: "100%"
    };
  };

  showBills = () => {
    var bills = this.state.bills.map(bill => (
      <tbody key={bill.id} style={this.getStyle()}>
        <tr>
          <td style={this.rowStyle()}>{bill.title}</td>
          <td style={this.rowStyle()}>{bill.amount}</td>
          <td style={this.rowStyle()}>{bill.due}</td>
        </tr>
      </tbody>
    ));
    return bills;
  };

  render() {
    return (
      <div>
        <table style={this.getStyle()}>
          <tbody>
            <tr>
              <th>Name:</th>
              <th>Amount:</th>
              <th>Due:</th>
            </tr>
          </tbody>
          {this.showBills()}
        </table>
        <AddBill />
      </div>
    );
  }
}

export default Bill;
