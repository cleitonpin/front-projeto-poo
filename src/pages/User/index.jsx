import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './index.css';

export default function User() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        const res = api.post('/user', {
            nome: name,
            username,
            senha: password
        })
        const { status } = await res;

        if (status === 200) {
            return history.push('/login');
        }
        return history.push('/register');
    }

    return (
        <div className="container">
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Seu Nome"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Nome de úsuario"
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            className="form-control"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Registrar
                    </button>


                </form>
            </div>
        </div>
    )
}