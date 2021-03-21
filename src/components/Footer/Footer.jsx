import classes from './Footer.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = props => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footerInner}>
                    <div className={classes.footerPhoneNumber}>
                        <button>+7 917 488 00 97</button>
                    </div>
                    <nav className={classes.footerNav}>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/search'}>Search</NavLink>
                        <NavLink to={'/register'}>Register</NavLink>
                        <NavLink to={'/me'}>Me</NavLink>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;