import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Ambiente from './pages/Ambiente'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Transportadora from './pages/Transregi'

export default function Routes() {

    return (
        <BrowserRouter>
            <Route exact path='/login' component={Login} />
            <Route exact path='/transportadora' component={Transportadora} />
            <Route exact path='/' component={Home} />
            <Route exact path='/ambiente' component={Ambiente} />
            <Route exact path='/dashboard' component={Dashboard} />
        </BrowserRouter>
    )
}