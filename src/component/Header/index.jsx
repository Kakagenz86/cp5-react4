import React from 'react'
import LogoImg from '../../assets/Logo.png'
import './style.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div>
        <div className='header'>
            <div className='header-logo'>
                <img src={LogoImg}/>
            </div>
            <div className='header-list'>
                <p>Home</p>
                <p>Users</p>
                <p>About</p>
                <p>Contact</p>
                <Link to="/user">Go User Halaman</Link>
            </div>
                <Link to="/detail/:id">Go Detail Halaman</Link>
        </div>
    </div>
    );
}

export default Header;