import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext({});

export const UserLogin = () => {
    const context = useContext(AuthContext);
    return context;
} 

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [signed, setSigned] = useState(true);
    const history = useHistory();
    localStorage.setItem('@App:user', JSON.stringify([{nome: 'cleion'}]))
    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');

        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
            setSigned(true);
        } else {
            setSigned(false);
        }
    }, [])

    async function Login(username, password) {
    
        const response = await api.get('/user');
        const { data } = response;
        const found = data.find(users => users.username === username && users.senha === password);
  
        localStorage.setItem('@App:user', JSON.stringify(found));

        setUser(found);
        setSigned(true);
    

    }

    function Logout() {
        history.push('/login');
        localStorage.removeItem('@App:user');
    }

    return (
        <AuthContext.Provider value={{ signed, Login, user, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;