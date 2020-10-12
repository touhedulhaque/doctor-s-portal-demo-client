import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'
import BusinessInfo from '../BusinessInfo/BusinessInfo';
const Header = () => {
    return (
        <div class="header-container">
            <Navbar/>
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;