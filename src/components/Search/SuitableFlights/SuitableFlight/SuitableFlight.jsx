import classes from './SuitableFlight.module.css';
import React, { useState } from 'react';
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router';

const SuitableFlight = props => {
    let [isTapped, setIsTapped] = useState(false);

    if (isTapped) return <Redirect to={'/buy-tickets'} />
    
    const onClickSuitableFlight = e => {
        setIsTapped(true);

        let flight = {
            to: props.to,
            from: props.from,
            whenThere: props.whenThere,
            whenBack: props.whenBack,
            price: props.price
        };

        props.setTicketToChosenFlight(flight);
    };

    return (
        <div onClick={onClickSuitableFlight} className={classes.suitalbeFlight}>
            <div className={classes.suitableFlightText}>
                <p>Куда: <span className={classes.flightInfo}>{props.to}</span></p>
                <p>Откуда: <span className={classes.flightInfo}>{props.from}</span></p>
                <p>Когда туда: <span className={classes.flightInfo}>{props.whenThere}</span></p>
                <p>Когда обратно: <span className={classes.flightInfo}>{props.whenBack}</span></p>
                <p>Цена: <span className={classes.flightInfo}>{props.price}</span></p>
            </div>
            <FontAwesomeIcon className={classes.icon} icon={faPlane} />
        </div>
    );
};

export default SuitableFlight;