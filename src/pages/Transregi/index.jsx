import React from 'react';

import './index.css';

export default function Transportadora() {
    return (
        <div className="container-transp">
            <form action="" className="form-transp">
                <div className="form-group">
                    <label htmlFor="">Nome</label>
                    <input type="text" className="form-control" placeholder="Seu nome"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" placeholder="Seu melhor email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Telefone</label>
                    <input type="text" className="form-control" placeholder="Fixo, Celular ou Whatsapp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Empresa</label>
                    <input type="text" className="form-control" placeholder="Empresa atual"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Média de CTes emitidos por mês *</label>
                    <select name="" id="" className="form-control">
                        <option value="">1 a 5</option>
                        <option value="">6 a 30</option>
                        <option value="">101 a 500</option>
                        <option value="">Acima de 500</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Sua empresa é</label>
                    <select name="setor" class="form-control" required="">
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