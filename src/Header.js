import React from 'react';
import './Header.css';
import Nav from './Nav'
import Home from './Home'

function Header(){
    return(
        <div className='header'>
        <div className='d-flex justify-content-around'>
            <div className='head1'>
            </div>
            <div className='d-flex align-items-center'>
                <h2 className='head'>System Management</h2>
            </div>
            <div className='head1'>
            </div>
        </div>
        <Nav />
        <Home />
        </div>
    )
}

export default Header;
