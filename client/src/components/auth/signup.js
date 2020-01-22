import React, { Component } from 'react';
import { Container, Button, Input, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            email: "",
            password: "",
            gender: null
        }
        this.onChange = this.onChange.bind(this);

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value

        });

    }

    render() {
        return (
            <div>
                <h1>Create a New Account</h1>
                <p>It’s quick and easy.</p>
                <Form>
                    <Form.Group controlId="NameUP">
                        <Form.Control type="text" value={this.state.value} onChange={this.onChange} name="userName" placeholder="User Name" />

                    </Form.Group>
                    <Form.Group controlId="mailUP">

                        <Form.Control type="email" value={this.state.value} onChange={this.onChange} name="email" placeholder="Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="ameUP">
                        <Form.Control type="password" value={this.state.value} onChange={this.onChange} name="password" placeholder="New Password" />

                    </Form.Group>
                    <Form.Group controlId="genderUP">
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="male"
                            id="male"
                            onChange={this.onChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="female"
                            id="female"
                            onChange={this.onChange}
                        />

                    </Form.Group>
                    <Button>SignUp</Button>
                </Form>

            </div>
        )
    }
}

