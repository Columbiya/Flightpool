import React from 'react';
import Title from '../common/Title/Title';
import classes from './Me.module.css';
import image from '../../assets/images/me/person.jpg';
import { Button } from '../common/FormControls/FormControls';

const Me = props => {
    const logout = () => {
        props.logout();
        props.setIsLoggedIn(false);
    };

    return (
        <section className={classes.me}>
            <div className="container">
                <Title text={'Личный кабинет'} />
                <div className={classes.user}>
                    <div className={classes.userInfo}>
                        <img src={props.image || image} className={classes.personImage} alt="person Image"/>
                        <h2 className={classes.userName}>{props.userName}</h2>
                        <h3 className={classes.userName}>{props.userSurname}</h3>
                    </div>
                    <h4 className={classes.userStatistics}>Всего куплено билетов: <span className={classes.statistics}>{props.boughtFlights}</span></h4>
                    <Button onClick={logout} className={classes.button} text={'Выйти из аккаунта'} />
                </div>
            </div>
        </section>
    );
};

export default Me;