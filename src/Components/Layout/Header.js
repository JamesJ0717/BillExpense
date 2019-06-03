import React, { Component } from 'react';

export default class Header extends Component {
    getStyle = () => {
        return {
            textAlign: 'center'
        };
    };
    render() {
        return (
            <div>
                <header style={this.getStyle()}>
                    <h1> Welcome to Bill Tracker! </h1>{' '}
                </header>{' '}
            </div>
        );
    }
}
