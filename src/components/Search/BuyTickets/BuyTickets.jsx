import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Title from '../../common/Title/Title';
import classes from './BuyTickets.module.css';
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../common/FormControls/FormControls';
import { NavLink } from 'react-router-dom';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const BuyTickets = props => {
    let { to, from, whenThere, whenBack, price } = props.flight;

    let [disabled, setDisabled] = useState(false);
    let [isFetching, setIsFetching] = useState(false);

    let afterBuying = <>
        <Title text={'Спасибо за покупку! Ожидаем вас в самолете!'} />
        <div className={classes.goHome}>
            <NavLink to={'/'}>На главную</NavLink>
        </div>
    </>;

    const buyTicket = async e => {
        setDisabled(true);
        setIsFetching(true);

        await sleep(1000);
        setIsFetching(false);

        props.addBoughtFlight(props.myId);
    };

    return (
        <section className={classes.buyTickets}>
            <div className="container">
                <Title text={'Вы покупаете билет на ..'} />
                <div className={classes.flight}>
                    <div className={classes.flightText}>
                        <p>Куда: <span className={classes.flightInfo}>{to}</span></p>
                        <p>Откуда: <span className={classes.flightInfo}>{from}</span></p>
                        <p>Когда туда: <span className={classes.flightInfo}>{whenThere}</span></p>
                        <p>Когда обратно: <span className={classes.flightInfo}>{whenBack}</span></p>
                        <p>Цена: <span className={classes.flightInfo}>{price}</span></p>
                    </div>
                    <FontAwesomeIcon icon={faPlane} className={classes.icon} />
                </div>
                <div className={classes.buttonContainer}>
                    <Button onClick={buyTicket} disabled={disabled} isSubscribed={isFetching} className={classes.button} text={'Купить'} />
                </div>
                {disabled && !isFetching && afterBuying}
            </div>
        </section>
    );
};

export default BuyTickets;