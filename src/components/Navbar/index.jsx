import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Rengato from '../../assets/rengato.png';
import AuthContext from '../../contexts/auth';

import './style.css';


export default function Navbar() {

    const { Logout } = useContext(AuthContext);
    const history = useHistory();

    function logout() {
        Logout();
        history.push('/login');
    }

    return (
        <nav id="navbarmy">
            <Link className="navbar-brand nav-link" to="/">
                <img src={Rengato} width="30" height="30" className="d-inline-block align-top" alt="" />
                Melhor Envio
            </Link>


            <div className="lim" id="navbarNav">
                <ul >
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/">Transportadoras</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/transportadora">Cadastre sua transportadora</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={logout} >Logout</button>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}