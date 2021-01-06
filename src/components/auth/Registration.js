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
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        console.log("form submitted");
        event.preventDefault();
        
    }

    handleChange(event) {
        console.log("handle change", event);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleGhange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleGhange}
                        required
                    />

                    <input
                        type="password_confirmation"
                        name="password_confirmation"
                        placeholder="Password confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleGhange}
                        required
                    />

                    <button>Register</button>
                </form>
            </div>
        );
    }
}
