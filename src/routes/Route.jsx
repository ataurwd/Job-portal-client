import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from './../pages/Home';

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
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