import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthContext from './contexts/auth'

import Ambiente from './pages/Ambiente'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import MyAppBar from './pages/Teste'
import Transportadora from './pages/Transregi'

export default function Routes() {
    const { signed } = useContext(AuthContext);
    console.log(signed);
    return (
        <BrowserRouter>
            <Switch>
                {signed ? 
                    <>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/transportadora' component={Transportadora} />
                        <Route exact path='/transportadoras' component={Transportadora} />
                        <Route exact path='/ambiente' component={Ambiente} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/teste' component={MyAppBar} /> 
                    </>
                :
                    <>   
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={User} />
                    </>
                }
                
            </Switch>
        </BrowserRouter>
    )
}