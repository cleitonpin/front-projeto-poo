import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';

// icons
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import api from '../../services/api';
import './style.css';

export default function Transportadoras() {

    const [transportadoras, setTransportadoras] = useState([]);

    useEffect(() => {
        api.get('/transportadora')
            .then(response => {
                setTransportadoras(response.data)
            }) ;
    }, [])

    return (
        <div className="container">
            <Navbar/>

            <div className="transportes">
                <div className="list-transports">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">TRANSPORTADORA</th>
                                <th scope="col">TELEFONE/WHATSAPP</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">ENDERECO</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {transportadoras.map((transp, key) => {
                                return (
                                    <tr key={key}>
                                        <th scope="row">{transp.nome}</th>
                                        <td><WhatsAppIcon/> {transp.telefone}</td>
                                        <td><EmailIcon/> {transp.email}</td>
                                        <td><RoomIcon/> {transp.endereco}</td>
                                        <td>
                                            <a target="_blank" href={`https://wa.me/${transp.telefone}`} className="btn btn-primary">
                                                Entrar em contato
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                            
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}