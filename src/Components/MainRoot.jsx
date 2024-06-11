import React from 'react';
import HeaderElement from './HeaderElement';
import { Outlet } from 'react-router-dom';

const MainRoot = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <HeaderElement></HeaderElement>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;