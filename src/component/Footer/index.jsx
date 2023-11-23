import React from 'react'
import LogoImg from '../../assets/Logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div>
            <div className='footer'>
                <div className='footer-logo'>
                    <img src={LogoImg} alt="" />
                    <p>2020 Epixelab. All rights reserved/</p>
                </div>
                <div className='footer-list'>
                    <p>Portfolio</p>
                    <p>How It Works</p>
                    <p>Pricing</p>
                    <p>About</p>
                    <p>Login</p>
                    <Link to={'/'}>
                    <button>Back to home</button>
                    </Link>
                    <Link to="/user/:id">Go Detail halaman</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;