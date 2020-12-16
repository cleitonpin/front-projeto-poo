import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const UserLogin = () => {
    const context = useContext(AuthContext);
    return context;
} 

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [signed, setSigned] = useState(false);

    async function Login(username, password) {
    
        const response = await api.get('/user');
        const { data } = response;
        const found = data.find(users => users.username == username && users.senha == password);

        setUser(found);
        setSigned(true);
    }

    return (
        <AuthContext.Provider value={{ signed, Login, user}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;