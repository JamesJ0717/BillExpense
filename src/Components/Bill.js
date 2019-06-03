import React, { Component } from 'react';
import Axios from 'axios';

import '../App.css';
import AddBill from './AddBill';

class Bill extends Component {
    state = {
        resBills: [],
        message: '',
        bills: []
    };

    componentDidMount() {
        Axios.get('http://67.242.41.128:3001/bill/get')
            .then(res => {
                console.log(res.data);
                if (res.data.status === 404) {
                    this.setState({
                        message: res.data.message
                    });
                } else {
                    this.setState({
                        resBills: res.data.bills
                    });
                }
            })
            .catch(e => {
                console.log(e);
            });
    }

    // Function to generate content based on whether or not there are bills in
    // the database
    billOrNoBill = () => {
        var content;

        const bills = []
            .concat(this.state.resBills)
            .sort((a, b) => a.dueNumber - b.dueNumber)
            .map(bill => (
                <tbody className='billTableContent' key={bill.id}>
                    <tr>
                        <td className='billTableContentRow'>{bill.title}</td>
                        <td className='billTableContentRowAmt'>
                            ${bill.amount}
                        </td>
                        <td className='billTableContentRowDate'>{bill.due}</td>
                    </tr>
                </tbody>
            ));

        if (this.state.message !== '') {
            content = <h2> {this.state.message} </h2>;
        } else {
            content = (
                <table className='billTable'>
                    <tbody className='billTableHeader'>
                        <tr>
                            <th>Name:</th>
                            <th>Amount:</th>
                            <th>Due:</th>
                        </tr>
                    </tbody>
                    {bills}
                </table>
            );
        }

        return content;
    };

    render() {
        return (
            <div>
                {this.billOrNoBill()}
                <AddBill />
            </div>
        );
    }
}

export default Bill;
