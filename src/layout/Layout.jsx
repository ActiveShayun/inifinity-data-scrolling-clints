import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto px-4'>
            <Outlet />
        </div>
    );
};

export default Layout;