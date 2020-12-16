import React, { useEffect, useState } from 'react';
import Cep from "react-simple-cep-mask";
import EmailIcon from '@material-ui/icons/Email';

import { paises } from './paises';
import './styles.css';
import api from '../../services/api';
import NavDash from '../../components/NavDash';

export default function Ambiente() {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [ie, setIe] = useState('');
    // enredeco
    const [cep, setCep] = useState('');
    const [pais, setPais] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [uf, setUf] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');

    function pesquisaCep() {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(body => {
            setLogradouro(body.logradouro);
            setComplemento(body.complemento);
            setBairro(body.bairro);
            setUf(body.uf);
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.post('/empresa/transporte', {
            nome_social: nome,
            sigla,
            nome_fantasia: nomeFantasia,
            cnpj,
            email,
            inscricao_estadual: ie,
            pais,
            uf,
            municipio,
            bairro,
            complemento,
            logradouro,
            numero
        })
        
    }

    return (
        <div>
            <NavDash />
            <h1 style={{ textAlign: 'center', marginTop: '20px'}}>Dados pessoais</h1>
            <div className="ambiente">
                <form onSubmit={handleSubmit}>
                    <div className="form-group div-flex">
                        <div className="mr-2">
                            <label htmlFor="">Nome</label>
                            <input onChange={e => setNome(e.target.value)} value={nome} type="text" className="form-control" placeholder="NOME EMPRESA LTDA"/>
                        </div>
                        <div className="mr-2">
                            <label htmlFor="">SIGLA</label>
                            <input onChange={e => setSigla(e.target.value)} value={sigla} type="text" className="form-control" placeholder="REC"/>
                        </div>
                        <div>
                            <label htmlFor="">Nome Fantasia</label>
                            <input onChange={e => setNomeFantasia(e.target.value)} value={nomeFantasia} type="text" className="form-control" placeholder="NOME FANTASIA EMPRESA"/>
                        </div>
                    </div>
               

                    <div className="form-group div-block">
                        <div>
                            <label htmlFor="">CNPJ</label>
                            <input onChange={e => setCnpj(e.target.value)} value={cnpj} type="text" className="form-control" placeholder="CNPJ"/>
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                <div className="input-group-text"><EmailIcon/></div>
                                </div>
                                <input onChange={e => setEmail(e.target.value)} value={email} type="text" className="form-control" id="inlineFormInputGroup" placeholder="email@email.com"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group div-flex">
                        <div className="mr-2">
                            <label htmlFor="">Inscrição estadual</label>
                            <input onChange={e => setIe(e.target.value)} value={ie} type="text" className="form-control" placeholder="NOME FANTASIA EMPRESA"/>
                        </div>
                        <div className="mr-2">
                            <label htmlFor="">CEP</label>
                            <Cep onBlur={pesquisaCep} onChange={cep => setCep(cep)} value={cep} type="text" className="form-control" placeholder="CEP NÃO SELECIONADO"/>
                        </div>
                        <div>
                            <label htmlFor="">País</label>
                            <select className="custom-select mr-sm-2">
                                {paises.map((listCountry, key) => <option key={key} onChange={e => setPais(e.target.value)} value={pais}>{listCountry.nome_pais}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="form-group div-flex">
                        <div className="mr-2">
                            <label htmlFor="">UF</label>
                            <input readOnly onChange={e => setUf(e.target.value)} value={uf} type="text" className="form-control" />
                        </div>
                        <div className="mr-2">
                            <label htmlFor="">Município</label>
                            <input onChange={e => setMunicipio(e.target.value)} value={municipio} type="text" className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="">Bairro</label>
                            <input readOnly onChange={e => setBairro(e.target.value)} value={bairro} type="text" className="form-control" placeholder="Bairro" />
                        </div>
                    </div>
                    <div className="form-group div-flex">
                        <div className="mr-2">
                            <label htmlFor="">Complemento</label>
                            <input readOnly onChange={e => setComplemento(e.target.value)} value={complemento} type="text" className="form-control" placeholder="Complemento"/>
                        </div>
                        <div className="mr-2">
                            <label htmlFor="">Logradouro</label>
                            <input readOnly onChange={e => setLogradouro(e.target.value)} value={logradouro} type="text" className="form-control" placeholder="Logradouro"/>
                        </div>
                        <div>
                            <label htmlFor="">Número</label>
                            <input onChange={e => setNumero(e.target.value)} value={numero} type="text" className="form-control" placeholder="Número"/>
                        </div>
                    </div>
                    <div className="center-align">
                        <button id="button-subimit" type="submit" className="btn btn-primary">SALVAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}