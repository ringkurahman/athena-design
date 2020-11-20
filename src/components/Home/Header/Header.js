import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import MainHeader from '../MainHeader/MainHeader';

const Header = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </div>
    );
};

export default Header;