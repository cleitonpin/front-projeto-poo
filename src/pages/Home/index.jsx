import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

import Cep from "react-simple-cep-mask";
import api from '../../services/api';
import Navbar from '../../components/Navbar';
import './index.css';

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

    function pesquisaCep() {
        fetch(`https://viacep.com.br/ws/${cepOrigem}/json/`)
        .then(res => res.json())
        .then(body => setEndereco(body.logradouro));
    }

    async function handleSubmit(e) {
        e.preventDefault();
       
        const { status } = await api.post('/carga', {
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

        if (status === 200) {
            history.push('/transportadoras')
        }
    }

    return (
        <div className="container">
            <Navbar/>

            <div className="init">
                <h1>ECONOMIZE NA GESTÃO DE FRETES</h1>
                <p>Cote simultaneamente com diversas transportadoras e gere envios com rastreio inteligente em uma plataforma integrada</p>
                <br></br>
                <Link to="/">DÊ O PRIMEIRO PASSO</Link>
            </div>

            <div className="form-carga">
                <h2>Dados da carga</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group inline">
                        <label htmlFor="">CEP Origem</label>
                        <Cep onBlur={pesquisaCep} onChange={cepOrigem => setCepOrigem(cepOrigem)} value={cepOrigem} className="form-control" type="text" placeholder="00000-000" />
                        <label htmlFor="">CEP Destino</label>
                        <Cep onBlur={pesquisaCep} onChange={cepDestino => setCepDestino(cepDestino)} value={cepDestino} className="form-control" type="text" placeholder="00000-00" />
                    </div>
                    <div className="form-group inline">
                        <label htmlFor="">Altura (cm)</label>
                        <input onChange={e => setAltura(e.target.value)} value={altura} className="form-control" type="text" />
                        <label htmlFor="">Largura (cm)</label>
                        <input onChange={e => setLargura(e.target.value)} value={largura} className="form-control" type="text" />
                        <label htmlFor="">Comprimento (cm)</label>
                        <input onChange={e => setComprimento(e.target.value)} value={comprimento} className="form-control" type="text" />
                        <label htmlFor="">Volumes (UN)</label>
                        <input onChange={e => setVolumes(e.target.value)} value={volumes} className="form-control" type="text" />
                    </div>
                    <div className="form-group inline">
                        <label htmlFor="">Valor (R$)</label>
                        <input onChange={e => setValor(e.target.value)} value={valor} type="text" className="form-control" />

                        <label htmlFor="">Peso (KG)</label>
                        <input onChange={e => setPeso(e.target.value)} value={peso} type="text" className="form-control" />

                        <label htmlFor="">Tipo da carga</label>
                        <input onChange={e => setTipoCarga(e.target.value)} value={tipoCarga} type="text" className="form-control" placeholder="Cadeira, Porta, Lataria..." />

                        <label htmlFor="">Endereço</label>
                        <input type="text" readOnly className="form-control" onChange={e => setEndereco(e.target.value)} value={endereco} />
                    </div>
                    <div className="center-align">
                        <button type="submit" className="btn btn-primary">COTAR FRETE AGORA!</button>
                    </div>
                </form>
            </div>

            {/* <div classname="transportadora">
                <h2>transportadoras</h2>
                <div classname="row">
                    <div classname="col">
                        <div classname="cidades">
                            <a href="#" classname="collection-item">
                                <span classname="badge">{'649 '} transportadoras</span>
                                são paulo
                            </a>
                            <a href="#" classname="collection-item">
                                <span classname="badge">{'649 '} transportadoras</span>
                                pernambuco
                            </a>
                            <a href="#" classname="collection-item">
                                <span classname="badge">{'649 '} transportadoras</span>
                                minas gerais
                            </a>
                            <a href="#" classname="collection-item">
                                <span classname="badge">{'649 '} transportadoras</span>
                                bahia
                            </a>
                        </div>

                    </div>

                    <div classname="col">
                        <div classname="cidades">
                            <a href="#" classname="collection-item">
                                <span classname="badge">{'649 '} transportadoras</span>
                                rio de janeiro
                            </a>
                            <a href="#" classname="collection-item">
                                <span classname="badge">{'649 '} transportadoras</span>
                                paraná
                            </a>
                            <a href="#" classname="collection-item">
                                <span classname="badge">{'649 '} transportadoras</span>
                                rio grande do sul
                            </a>
                            <a href="#" classname="collection-item">

                                outros...
                            </a>
                        </div>
                    </div>


                </div>
            </div>
         */}
        </div>
    )
}