import React, { Component } from 'react';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registerErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("form submitted");
        event.preventDefault();
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}></form>
            </div>
        );
    }
}
