import classes from './Header.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/header/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MenuLayer from '../common/MenuLayer/MenuLayer';
import clouds from '../../assets/images/header/clouds.svg';

const Header = props => {
    let [isActiveMenu, toggleMenu] = useState(false);

    let isLoggedIn = !props.isLoggedIn && <>
                                            <NavLink to={'/register'} className={classes.link + ' ' + classes.important}>Регистрация</NavLink> 
                                           <NavLink to={'/login'} className={classes.link + ' ' + classes.important}>Авторизация</NavLink>
                                          </>;

    const logout = () => {
        props.logout();
        props.setIsLoggedIn(false);
    }

    const onMenuClick = e => {
        toggleMenu(!isActiveMenu);
    };

    return (
        <>
            <header className={classes.header}>
                <div className="container">
                    <div className={`${classes.headerInner} ${isActiveMenu ? classes.menuActive: null}`}>
                        <nav className={classes.nav}>
                            <NavLink to={'/'} className={classes.link}>Home</NavLink>
                            <NavLink to={'/search'} className={classes.link}>Поиск</NavLink>
                            {isLoggedIn || <a href='#' onClick={logout} className={classes.link}>Выйти из аккаунта</a>}
                            <NavLink to={'/me'} className={classes.link}>Личный кабинет</NavLink>
                        </nav>
                        <div className={classes.logoContainer}>
                            <NavLink to={'/'}>
                                <img src={logo} className={classes.logo} alt={'logo of the company'} />
                            </NavLink>
                        </div>
                    </div>
                    <FontAwesomeIcon className={classes.menu} onClick={onMenuClick} icon={faBars} size={'2x'} />
                    {isActiveMenu && <MenuLayer onClick={onMenuClick} />}
                </div>
            </header>
            {props.location.pathname === '/' ?
                <div className={classes.background}>
                    <Parallax />
                    <div className={"container" + " " + classes.backgroundContainer}>
                        <div className={classes.backgroundInner}>
                            <h1 className={classes.backgroundTitle}>Присоединяйся к нам!</h1>
                        </div>
                    </div>
                </div>
                : null}
        </>
    );
};

const Parallax = props => {
    const container = useRef(null);

    useEffect(() => {
        const items = document.querySelectorAll(`.cloud`);
        const parallaxThem = event => {
            let x = event.clientX;
            let y = event.clientY;

            items.forEach(cloud => {
                cloud.style.transform = `translate(${x * cloud.dataset.speed / 75}px, ${y * cloud.dataset.speed / 75}px)`
            });
        }

        container.current.addEventListener('mousemove', parallaxThem);
    }, []);

    return (
        <div className={classes.parallax} ref={container}>
            <img className={classes.clouds + ' cloud'} data-speed={3} src={clouds} alt=""/>
            <img className={classes.clouds + ' cloud'} data-speed={4} src={clouds} alt=""/>
            <img className={classes.clouds + ' cloud'} data-speed={-3} src={clouds} alt=""/>
            <img className={classes.clouds + ' cloud'} data-speed={-4} src={clouds} alt=""/>
        </div>
    );
};



export default Header;