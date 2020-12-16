import React, { useContext } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import AuthContext from '../../contexts/auth'

import './index.css';

export default function User() {

    const context = useContext(AuthContext);

    
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(await context.Login());
    }

    return (
        <div className="container">
            <div className="box">
                <Form onSubmit={handleSubmit}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control className="mb-2" type="text" placeholder="Enter a name" />
                        </Col>

                        <Col xs="auto">
                            <Form.Label>Username</Form.Label>
                            <Form.Control className="mb-2" type="text" placeholder="Enter a username" />
                        </Col>

                        
                        <Col xs="auto">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="mb-2" type="password" placeholder="Enter a password" />
                        </Col>

                        <Col xs="auto">
                            <Button variant="primary" type="submit" className="mb-2 husb">
                                Submit
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        </div>
    )
}