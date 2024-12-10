import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/firebaseConfig';

export const UserContext = createContext(null)

const AuthContext = ({ children }) => {
    
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginAuth = (email, password) => { 
        return signInWithEmailAndPassword(auth, email, password)
    }

    const obj = {
        register,
        loginAuth,
    }
    return (
        <UserContext.Provider value={obj}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;