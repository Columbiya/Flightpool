import classes from './MenuLayer.module.css';
import React from 'react';

const MenuLayer = ({onClick, ...props}) => {
    return (
        <div className={classes.menuLayer} onClick={onClick}></div>
    );
};

export default MenuLayer;