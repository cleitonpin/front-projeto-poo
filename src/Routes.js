import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

export default function Routes() {

    return (
        <BrowserRouter>
            <Route path='/login' component={Login} />
            <Route path='/' component={Home} />
        </BrowserRouter>
    )
}