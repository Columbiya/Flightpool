import classes from './SubscribeToPromotions.module.css';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import Title from '../../common/Title/Title';
import { Button, createFormElement, Success } from '../../common/FormControls/FormControls';
import { composeValidators, isActualEmail, required } from '../../../utils/validators/validators';

const Input = createFormElement('input');

const SubscribeToPromotions = props => {
    let [isSubscribed, setIsSubcribed] = useState(false);

    return (
        <section className={classes.subscribeToPromotions}>
            <Title text={'Подпишитесь на все новые акции'} />
            <SubscribeToPromotionsForm setSubscribers={props.setSubscribers} setIsSubcribed={setIsSubcribed} isSubscribed={isSubscribed} />
            {isSubscribed ? <Success text={'Вы успешно подписались на новые акции нашей авиакомпании!'} />: null}
        </section>
    )
};

const SubscribeToPromotionsForm = props => {
    let isSubscribed = props.isSubscribed;

    const onSubmit = formData => {
        props.setSubscribers(formData.email);
        props.setIsSubcribed(true);
    };
    return (
        <Form onSubmit={onSubmit}>
            {props => (
                <form onSubmit={props.handleSubmit} className={classes.form}>
                    <div className={classes.formInput}>
                        <Field component={Input} name={'email'} placeholder={'Your email..'}
                                                                validate={composeValidators(isActualEmail, required) } />
                    </div>
                    <Button className={classes.button} isSubscribed={isSubscribed} text={'Подписаться'} />
                </form>
            )}
        </Form>
    );
};

export default SubscribeToPromotions;