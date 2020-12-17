import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';


import './index.css';

export default function Transportadora() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [mediaCte, setMediaCte] = useState('');
    const [tipoEmpresa, setTipoEmpresa] = useState('');
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        const { status } = await api.post('/transportadora', {
            nome,
            email,
            telefone,
            empresa_atual: empresa,
            ctes_por_mes: mediaCte,
            tipo_empresa: tipoEmpresa
        });
        
        if (status === 200) {
            return history.push('/ambiente/register');
        }
        throw new Error;
    }


    return (
        <div className="container-transp">
            
            <form onSubmit={handleSubmit} className="form-transp">
                <div className="form-group">
                    <label htmlFor="">Nome</label>
                    <input onChange={e => setNome(e.target.value)} value={nome} type="text" className="form-control" placeholder="Seu nome"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input onChange={e => setEmail(e.target.value)} value={email} type="text" className="form-control" placeholder="Seu melhor email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Telefone</label>
                    <input onChange={e => setTelefone(e.target.value)} value={telefone} type="text" className="form-control" placeholder="Fixo, Celular ou Whatsapp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Empresa</label>
                    <input onChange={e => setEmpresa(e.target.value)} value={empresa} type="text" className="form-control" placeholder="Empresa atual"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Média de CTes emitidos por mês *</label>
                    <select onChange={e => setMediaCte(e.target.value)} value={mediaCte} name="" id="" className="form-control">
                        <option value="1 a 5">1 a 5</option>
                        <option value="6 a 30">6 a 30</option>
                        <option value="101 a 500">101 a 500</option>
                        <option value="Acima de 500">Acima de 500</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Sua empresa é</label>
                    <select onChange={e => setTipoEmpresa(e.target.value)} value={tipoEmpresa} name="setor" className="form-control" required="">
                        <option value="">Selecione</option>
                        <option value="Não tem empresa">Não tem empresa</option>
                        <option value="Autônomo">Autônomo</option>
                        <option value="Transportadora">Transportadora</option>
                        <option value="Operador Logístico">Operador Logístico</option>
                        <option value="Distribuidor">Distribuidor</option>
                        <option value="Agente de carga">Agente de carga</option>
                        <option value="Indústria">Indústria</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Agronegócio">Agronegócio</option>
                        <option value="Atacado">Atacado</option>
                        <option value="Varejo">Varejo</option>
                        <option value="Contabilidade">Contabilidade</option>
                        <option value="Outros">Outros</option></select>
                </div>
                <div className="center-align">
                    <button id="button-subimit" type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(244,121,32,1)' }}>COMEÇAR!</button>
                </div>
            </form>
        </div>
    )
}