import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Job from '../pages/Jobs/Job';
import Login from './../users/Login';
import Register from './../users/Register';

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/jobs',
                element: <Job/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

const Route = () => {
    return (
        <RouterProvider router={route}/>
    );
};

export default Route;