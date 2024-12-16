import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(UserContext)
    
    if (loading) return (<div>
        <span className="loading loading-spinner loading-lg"></span>
    </div>);

    if (user && user?.email) {
        return children;
    }
    if (!user) {
        Swal.fire({
            title: "Please Login to see Details",
            text: "you need to login to see details",
            icon: "error"
          });
    }
    return (
        <Navigate to={'/login'} state={location.pathname}/>
    );
};

export default PrivateRoute;