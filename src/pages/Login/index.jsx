import React, { FormEvent } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

import './index.css';

export default function Login() {

    function handleSubmit (e = new FormEvent()) {
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="box">
                <Form onSubmit={handleSubmit}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="mb-2" type="email" placeholder="Enter email" />
                        </Col>

                        <Col xs="auto">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="mb-2" type="password" placeholder="Enter email" />
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