import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from '../WereTrustworthy.module.css';

const WereTrustworthyItem = props => {
    return (
        <>
            <div className={classes.gridElement}>
                <FontAwesomeIcon className={classes.icon} icon={props.icon} size="3x" />
                <p className={classes.gridText}>{props.text}</p>
            </div>
        </>
    );
};

export default WereTrustworthyItem;