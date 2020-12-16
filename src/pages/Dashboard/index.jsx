
import React, { useEffect } from 'react';


import AccountBoxIcon from '@material-ui/icons/AccountBox';

import './styles.css';
import { Link } from 'react-router-dom';
import NavDash from '../../components/NavDash';
import api from '../../services/api';

export default function Dashboard() {

    useEffect(() => {
        const res = api.get('/empresa/ambiente');
    }, [])

    return (
        <div>
           
            <NavDash />
            <div className="my-profile">
                <div className="infos">
                    <h5>
                        <AccountBoxIcon /> MEU PERFIL
                    </h5>

                    <h3>
                        Os dados da empresa ainda não estão configurados. <br/>
                        Atualize agora o seu cadastro e crie o seu perfil para este ambiente.
                    </h3>
                    <Link className="btn btn-primary center-align" to="/ambiente">Criar perfil</Link>
                </div>
            </div>

        </div>
    )
}