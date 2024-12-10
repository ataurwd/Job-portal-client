import React, { createContext } from 'react';

export const UserContext = createContext(null)

const AuthContext = ({children}) => {

    const obj = {}
    return (
        <UserContext.Provider value={obj}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;