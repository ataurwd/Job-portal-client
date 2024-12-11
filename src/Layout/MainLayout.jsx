import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navber />
            <div className='md:mt-20'>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;