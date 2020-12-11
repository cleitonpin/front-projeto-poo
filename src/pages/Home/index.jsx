import React from 'react';
// import { Link } from 'react-router-dom';
import Rengato from './rengato.png'

import './index.css';

export default function Home() {

    return (
        <div className="container">
            <nav id="navbarmy">
                <a className="navbar-brand" href="/">
                    <img src={Rengato} width="30" height="30" class="d-inline-block align-top" alt=""/>
                    TRANSFRETE
                </a>
    
                
                <div className="lim" id="navbarNav">
                    <ul >
                        <li className="nav-item">
                            <a className="nav-link" href="/">Cotações de Frete</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Transportadoras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Cadastre sua transportadora</a>
                        </li>
                    </ul>
                </div>
            </nav>
  

        </div>
    )
}