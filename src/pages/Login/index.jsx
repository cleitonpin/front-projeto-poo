import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
        
        <div className="box">
            <form onSubmit={handleSubmit} className="form-login">
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Seu úsuario" 
                        onChange={e => setUser(e.target.value)} 
                        value={user}
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
                <div className="panel-buttons">
                    <button type="submit"  className="btn btn-primary mr-2">
                        Entrar
                    </button>
                    <Link to="/register" className="btn btn-primary">
                        Registrar
                    </Link>
                </div>
            </form>
        </div>
    
    )
}