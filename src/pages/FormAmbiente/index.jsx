import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function FormAmbiente() {

    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        api.post('/empresa/ambiente', {
            nome,
            cnpj
        })

        history.push('/dashboard');
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Nome</label>
                    <input className="form-control" type="text"/>
                    <label htmlFor="">CNPJ</label>
                    <input className="form-control" type="text"/>

                    <button type="submit" className="btn btn-primary">Criar ambiente</button>
                </div>
            </form>
        </div>
    )
}