import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navber />
            <div className='md:mt-16'>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;