import React, { useEffect } from 'react';
import { UserLogin } from '../../contexts/auth';

import IconPerson from './2.png';
import './styles.css';

export default function Dashboard() {

    const { user } = UserLogin();
    useEffect(() => {
        console.log(user);
    }, [])
    return (
        <div className="container">
            <nav className="navbar navbar-expand-bg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Navbar</a>

            <div className="dash" id="navbarNav">
                <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Cotações de Frete</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Transportadoras</a>
                    </li>
                    <li className="nav-item">
                        <img className="img-person" src={IconPerson} alt=""/>
                    </li>
                </ul>
            </div>

            </nav>
            <div className="post-f-t">
                <div className="collapse">
                    <div className="bg-dark p-4">
                        <h4>OPCOES</h4>
                        <span className="text-muted"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}