import React from 'react';
import classes from './FormControls.module.css';

export const createFormElement = Element => ({input, meta, className, type, ...props}) => {
    const errorForm = meta.touched && meta.error ? classes.errorForm: undefined;

    return (
        <>
            <Element className={`${className} ${errorForm} ${classes.formField}`} type={type} {...input} {...props} />
            {meta.touched && meta.error && <span className={classes.errorText}>{meta.error}</span>}
        </>
    );
}

export const Button = ({className = null, isSubscribed = false, onClick = null, ...props}) => {
    return (
        <button type={'submit'} className={classes.submit + " " + className} onClick={onClick} disabled={isSubscribed} {...props}> {isSubscribed ? '...': props.text} </button>
    );
};

export const Success = ({className = null, ...props}) => {
    return (
        <p className={classes.success + " " + className} {...props}>{props.text}</p>
    );
};