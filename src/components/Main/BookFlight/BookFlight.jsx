import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import Title from '../../common/Title/Title';
import classes from './BookFlight.module.css';
import { Button, createFormElement } from '../../common/FormControls/FormControls';
import { composeValidators, onlyFuture, onlySymbolsAllowed, required } from '../../../utils/validators/validators';
import { FORM_ERROR } from 'final-form';
import { Redirect } from 'react-router';

const Input = createFormElement('input');


const BookFlight = props => {
    let [isSet, setIsSet] = useState(false);

    if (isSet) return <Redirect to={'/see-suitable-flights'} />

    return (
        <section className={classes.bookFlight}>
            <Title text='Оформите ваш перелёт прямо сейчас' />
            <BookFlightForm setMyFlight={props.setMyFlight} setIsSet={setIsSet} />
        </section>
    );
};

const BookFlightForm = props => {
    const onSubmit = formData => {
        if (formData.goingDate > formData.arrivingDate) {
            return {
                [FORM_ERROR]: 'Дата прибытия не может быть раньше даты уезда'
            };
        }

        let {fromWhere, toWhere, goingDate, arrivingDate} = formData;

        props.setMyFlight(fromWhere, toWhere, goingDate, arrivingDate);
        props.setIsSet(true);
    };

    return (
        <Form onSubmit={onSubmit}>
            {props => (
                <form onSubmit={props.handleSubmit} className={classes.form}>
                    <div className={classes.formElement}>
                        <span className={classes.formElementText}>Откуда: </span>
                        <Field component={Input} type={'text'} name={'fromWhere'} validate={composeValidators(onlySymbolsAllowed, required)} />
                    </div>
                    <div className={classes.formElement}>
                        <span className={classes.formElementText}>Куда: </span>
                        <Field component={Input} type={'text'} name={'toWhere'} validate={composeValidators(onlySymbolsAllowed, required) } />
                    </div>
                    <div className={classes.formElement}>
                        <span className={classes.formElementText}>Когда улетаем: </span>
                        <Field component={Input} type={'date'} name={'goingDate'} validate={composeValidators(onlyFuture, required)} />
                    </div>
                    <div className={classes.formElement}>
                        <span className={classes.formElementText}>Когда прилетаем: </span>
                        <Field component={Input} type={'date'} name={'arrivingDate'} validate={composeValidators(onlyFuture, required)} />
                    </div>
                    {props.submitError && <p className={classes.errorText}>{props.submitError}</p>}
                    <Button className={classes.button} text={'Посмотреть доступные рейсы'} />
                </form>
            )}

        </Form>
    );
}

export default BookFlight;