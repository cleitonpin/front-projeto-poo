import React from 'react';
import { Link } from 'react-router-dom';

import Rengato from './rengato.png'
import './index.css';

export default function Home() {

    return (
        <div className="container">
            <nav id="navbarmy">
                <a className="navbar-brand" href="/">
                    <img src={Rengato} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Melhor Envio
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
                            <a className="nav-link" href="/transportadora">Cadastre sua transportadora</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="init">
                <h1>ECONOMIZE NA GESTÃO DE FRETES</h1>
                <p>Cote simultaneamente com diversas transportadoras e gere envios com rastreio inteligente em uma plataforma integrada</p>
                <br></br>
                <Link to="#">DÊ O PRIMEIRO PASSO</Link>
            </div>

            <div className="form-carga">
                <h2>Dados da carga</h2>
                <form action="">
                    <div className="form-group inline">
                        <input className="form-control" type="text" placeholder="CEP Origem"/>
                        <label htmlFor=""></label>
                        <input className="form-control" type="text" placeholder="CEP Destino"/>
                    </div>
                    <div className="form-group inline">
                        <label htmlFor="">Altura (cm)</label>
                        <input className="form-control" type="text"/>
                        <label htmlFor="">Largura (cm)</label>
                        <input className="form-control" type="text"/>
                        <label htmlFor="">Comprimento (cm)</label>
                        <input className="form-control" type="text"/>
                        <label htmlFor="">Volumes (UN)</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group inline">
                        <label htmlFor="">Valor (R$)</label>
                        <input type="text" className="form-control"/>

                        <label htmlFor="">Peso (KG)</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="center-align">
                        <button type="submit" className="btn btn-primary">COTAR FRETE AGORA!</button>
                    </div>
                </form>
            </div>
        
            <div className="transportadora">
                <h2>Transportadoras</h2>
                <div className="row">
                    <div className="col">
                        <div className="cidades">
                            <a href="#" className="collection-item">
                                <span className="badge">{'649 '} transportadoras</span>
                                São Paulo
                            </a>
                            <a href="#" className="collection-item">
                                <span className="badge">{'649 '} transportadoras</span>
                                Pernambuco
                            </a>
                            <a href="#" className="collection-item">
                                <span className="badge">{'649 '} transportadoras</span>
                                Minas Gerais
                            </a>
                            <a href="#" className="collection-item">
                                <span className="badge">{'649 '} transportadoras</span>
                                Bahia
                            </a>
                        </div>
                        
                    </div>

                    <div className="col">
                        <div className="cidades">
                            <a href="#" className="collection-item">
                                <span className="badge">{'649 '} transportadoras</span>
                                Rio de Janeiro
                            </a>
                            <a href="#" className="collection-item">
                                <span className="badge">{'649 '} transportadoras</span>
                                Paraná
                            </a>
                            <a href="#" className="collection-item">
                                <span className="badge">{'649 '} transportadoras</span>
                                Rio Grande do Sul
                            </a>
                            <a href="#" className="collection-item">
                                
                                Outros...
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}