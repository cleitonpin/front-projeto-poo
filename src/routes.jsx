import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthContext from './contexts/auth'

import Ambiente from './pages/Ambiente'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import Transportadora from './pages/Transregi'
import Transportadoras from './pages/Transportadoras'
import FormAmbiente from './pages/FormAmbiente'

export default function Routes() {
    const { signed } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Switch>
                {signed ? 
                    <>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/transportadora' component={Transportadora} />
                        <Route exact path='/transportadoras' component={Transportadoras} />
                        <Route exact path='/ambiente' component={Ambiente} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/ambiente/register' component={FormAmbiente} /> 
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