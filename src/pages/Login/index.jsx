import React, { useContext, useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserLogin } from '../../contexts/auth'

import './index.css';

export default function Login() {
    
    const { Login } = UserLogin();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        await Login(user, password);
        history.push('/');
    }

    return (
        <div className="container">
            <div className="box">
                <Form onSubmit={handleSubmit}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                className="mb-2" 
                                type="text" 
                                placeholder="Enter a username" 
                                onChange={e => setUser(e.target.value)} 
                                value={user}
                            />
                        </Col>

                        <Col xs="auto">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                className="mb-2" 
                                type="password" 
                                placeholder="Enter a pass"
                                onChange={e => setPassword(e.target.value)} 
                                value={password}
                                />
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