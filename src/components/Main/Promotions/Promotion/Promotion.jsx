import classes from './Promotion.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Promotion = props => {
    return (
        <div className={classes.promotion}>
            <div className={classes.promotionText}>
                <h2 className={classes.promotionTitle}>
                    {props.header}
                </h2>
                <div>
                    {props.body}
                </div>
            </div>
            <div className={classes.promotionImage}>
                <img src={props.image} alt="Promotion photo" />
            </div>
        </div>
    );
};

export default Promotion;