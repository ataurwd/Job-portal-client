import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';

export const UserContext = createContext(null)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginAuth = (email, password) => { 
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscript = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscript()
    }, [])

    const obj = {
        register,
        loginAuth,
        user, 
        setUser,
        loading,
        logout,
        googleLogin
    }
    return (
        <UserContext.Provider value={obj}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;