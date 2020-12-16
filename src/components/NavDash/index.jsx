import { Drawer } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import MyDrawerList from '../Drawer';

import AuthContext from '../../contexts/auth';
import IconPerson from '../../assets/2.png';

export default function NavDash() {


    const { Logout, user } = useContext(AuthContext);
    const [drawerOpen, setDrawerOpen] = useState(false);


    const toggleDrawer = (openDrawer) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return null;
        }
        setDrawerOpen(openDrawer);
    };
    
    return (
        <div>
             <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <MyDrawerList />
            </Drawer>

            <nav className="navbar navbar-expand-bg navbar-light bg-light">
            <button onClick={toggleDrawer(true)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="dash" id="navbarNav">
                <ul>
                    <li className="nav-item">
                        <img className="img-person" src={IconPerson} alt=""/>
                        {user.nome}
                    </li>

                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={Logout}>Logout</button>
                    </li>
                </ul>
            </div>

            </nav>
        </div>
    )
}