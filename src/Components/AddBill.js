import React, { Component } from 'react';
import Axios from 'axios';

import '../App.css';

export default class AddBill extends Component {
    state = {
        title: '',
        amount: '',
        due: Date(),
        repeat: false
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        Axios.post('http://67.242.41.128:3001/bill', {
            title: this.state.title,
            amount: this.state.amount,
            due: this.state.due,
            repeat: this.state.repeat
        })
            .then(res => {
                console.log(res);
                if (res.data.created) {
                    alert('Bill Created');
                }
            })
            .then()
            .catch(err => {
                console.log(err);
            });
    };

    check = e => {
        e.preventDefault();
        this.setState({ repeat: !this.state.repeat });
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className='billForm'>
                <form className='newBill' onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='title'
                        placeholder='New Bill'
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <br />
                    <input
                        type='number'
                        name='amount'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onChange}
                    />
                    <br />
                    <input
                        type='date'
                        name='due'
                        placeholder='Due Date'
                        value={this.state.due}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>
                        Repeat
                        <input
                            type='checkbox'
                            name='repeat'
                            value={this.state.repeat}
                            onChange={this.check}
                        />
                    </label>
                    <br />
                    <input type='submit' placeholder='Submit' className='btn' />
                </form>
            </div>
        );
    }
}
