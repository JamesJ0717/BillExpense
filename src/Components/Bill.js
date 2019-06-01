import React, { Component } from "react";
import Axios from "axios";

class Bill extends Component {
  state = {
    bills: []
  };

  componentDidMount() {
    Axios.get("http://192.168.0.3:3001/bills")
      .then(res => {
        console.log(res.data);
        this.setState({ bills: res.data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "5px",
      borderBottom: "1px #ccc dotted"
    };
  };

  showBills = () => {
    var bills = this.state.bills.map(bill => (
      <tbody key={bill.id} style={this.getStyle()}>
        <tr>
          <td>{bill.title}</td>
          <td>{bill.amount}</td>
          <td>{bill.due}</td>
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
      </div>
    );
  }
}

export default Bill;
