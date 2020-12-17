import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const UserLogin = () => {
    const context = useContext(AuthContext);
    return context;
} 

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');

        if (storagedUser != undefined) {
            
            setUser(JSON.parse(storagedUser));
            setSigned(true);
        } else {
            setSigned(false);
        }
    }, [])

    async function Login(username, password) {
    
        const { data } = await api.post('/user/login', {
            username,
            senha: password
        });

        localStorage.setItem('@App:user', JSON.stringify(data));
        setUser(data);
        setSigned(true);
    }

    function Logout() {
        localStorage.removeItem('@App:user');
        setSigned(false);
    }

    return (
        <AuthContext.Provider value={{ signed, Login, user, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;