import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

import Rengato from './rengato.png'
import './index.css';
import api from '../../services/api';

export default function Home() {
    // const res = axios.get('viacep.com.br/ws/01001000/json/');

    const [endereco, setEndereco] = useState('');
    const [cepOrigem, setCepOrigem] = useState('');
    const [cepDestino, setCepDestino] = useState('');
    const [altura, setAltura] = useState(0);
    const [largura, setLargura] = useState(0);
    const [comprimento, setComprimento] = useState(0);
    const [volumes, setVolumes] = useState(0);
    const [valor, setValor] = useState(0);
    const [peso, setPeso] = useState(0);
    const [tipoCarga, setTipoCarga] = useState('');
    const history = useHistory();

    
    fetch(`https://viacep.com.br/ws/${cepOrigem}/json/`)
        .then(res => res.json())
        .then(body => setEndereco(body.logradouro));

    async function handleSubmit(e) {
        e.preventDefault();

        const res = api.post('/carga', {
            endereco,
            cep_origem: cepOrigem,
            cep_dest: cepDestino,
            altura,
            largura,
            comprimento,
            valor,
            quantidade: volumes,
            peso,
            tipo_carga: tipoCarga
        });

        const { status } = res;

        if (status == 200) {
            history.push('/transportadoras')
        }
    }

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
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/">Transportadoras</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/transportadora">Cadastre sua transportadora</Link>
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
                <form onSubmit={handleSubmit}>
                    <div className="form-group inline">
                        <input onChange={e => setCepOrigem(e.target.value)} value={cepOrigem} className="form-control" type="text" placeholder="CEP Origem" />
                        <label htmlFor=""></label>
                        <input onChange={e => setCepDestino(e.target.value)} value={cepDestino} className="form-control" type="text" placeholder="CEP Destino"/>
                    </div>
                    <div className="form-group inline">
                        <label htmlFor="">Altura (cm)</label>
                        <input onChange={e => setAltura(e.target.value)} value={altura} className="form-control" type="text"/>
                        <label htmlFor="">Largura (cm)</label>
                        <input onChange={e => setLargura(e.target.value)} value={largura} className="form-control" type="text"/>
                        <label htmlFor="">Comprimento (cm)</label>
                        <input onChange={e => setComprimento(e.target.value)} value={comprimento} className="form-control" type="text"/>
                        <label htmlFor="">Volumes (UN)</label>
                        <input onChange={e => setVolumes(e.target.value)} value={volumes} className="form-control" type="text"/>
                    </div>
                    <div className="form-group inline">
                        <label htmlFor="">Valor (R$)</label>
                        <input onChange={e => setValor(e.target.value)} value={valor} type="text" className="form-control"/>

                        <label htmlFor="">Peso (KG)</label>
                        <input onChange={e => setPeso(e.target.value)} value={peso} type="text" className="form-control"/>

                        <label htmlFor="">Tipo da carga</label>
                        <input onChange={e => setTipoCarga(e.target.value)} value={tipoCarga} type="text" className="form-control"/>
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