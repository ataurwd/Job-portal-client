import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext, { UserContext } from '../context/AuthContext';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})

const useAxios = () => {

    const {logout} = useContext(UserContext)
    useEffect(() => {
        axiosInstance.interceptors.response.use(res => {
            return res;
        }, err => {
            if (err.response && err.response.status === 401) {
                console.log('need to logout the user')
                logout()
                .then(() => console.log('logout user for bad code'))
            }
            return Promise.reject(err)
        })
    }, []);
    return axiosInstance;
};

export default useAxios;