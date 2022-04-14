import React, { Component } from 'react'
import { 
    Container, 
    Row, Col, Form, 
    Button } from 'react-bootstrap'

import Welcome from './Welcome'
import GuestGreeting from './GuestGreeting'

<<<<<<< Updated upstream
export default class App extends Component {
=======
import { useEffect, useState } from 'react'

function App() {
>>>>>>> Stashed changes

    constructor(){
        super()
        this.state = {
            isLogin: false,
            user: {
                email: '',
                password: ''
            }
        }
    }

    //Create method DidMount inside it can print "App Component Did Mount" & print state value here...
    componentDidMount(){
        console.log("App Component Didmount");
        console.log(this.state);
    }

    //Create method DidUpdate inside it can print "App Component Did Update" & print state value here...
    componentDidUpdate(){
        console.log("App Component Didupdate");
        console.log(this.state);
    }


    handleOnSubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        this.setState({
            isLogin: true,
            user: { 
                email,
                password
            }
        })
        console.log(this.state)
    }

<<<<<<< Updated upstream
    render() {
        return (
            <>
                {this.state.isLogin ? <Welcome /> : 
                    (<>
                        <GuestGreeting />
                        <Container>
                            <Row 
                            className="d-flex justify-content-center mt-5">
                                <Col md="4">
                                <Form onSubmit={this.handleOnSubmit}>
                                    <div className="text-center h5">Login</div>
=======

    return (
        <>
            {state.isLogin ? <Welcome /> : 
                (<>
                    <GuestGreeting />
                    <Container>
                        <Row 
                        className="d-flex justify-content-center mt-5">
                            <Col md="4">
                            <Form onSubmit={handleOnSubmit}>
                                <div className="text-center h5">Login</div>
>>>>>>> Stashed changes

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        id="email"
                                        name="email" size="sm" type="email" 
                                        placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        id="password"
                                        name="password" size="sm" type="password" 
                                        placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" size="sm">
                                        Submit
                                    </Button>
                                </Form>
                                </Col>
                            </Row>
                        </Container>
                    </>) }
            </>
        )
    }
}
