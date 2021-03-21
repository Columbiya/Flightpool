import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Button, createFormElement, Success } from '../common/FormControls/FormControls';
import classes from './Register.module.css';
import { FORM_ERROR } from 'final-form';
import { composeValidators, isActualPhoneNumber, maxLengthCreator, required } from '../../utils/validators/validators';
import Title from '../common/Title/Title';

const Input = createFormElement('input');
const maxLength15 = maxLengthCreator(15);

const Register = props => {
    let [isSignedUp, setIsSignedUp] = useState(false);

    return (
        <div className={classes.register}>
            <Title text={'Начните путешествовать с нами'} />
            <div className="container">
                <RegisterForm setUserData={props.setUserData} setIsSignedUp={setIsSignedUp}/>
                {isSignedUp ? <Success text={'Вы успешно зарегистрировались!'} />: null}
            </div>

        </div>
    );
};

const RegisterForm = props => {
    const onSubmit = formData => {
        if (formData.password !== formData.repeatPassword) {
            return {
                [FORM_ERROR]: 'Поля password и repeat password не совпадают'
            }
        }

        let {name, surname, phoneNumber, password} = formData;
        props.setUserData(name, surname, phoneNumber, password);
        props.setIsSignedUp(true);
    };

    return (
        <Form onSubmit={onSubmit}>
            {props => (
                <form onSubmit={props.handleSubmit} className={classes.form}>
                    <div className={classes.formName + " " + classes.formElement}>
                        <Field component={Input} className={classes.formInput} placeholder={'your name...'}
                                                                                validate={required} name={'name'} />
                    </div>

                    <div className={classes.formSurname + " " + classes.formElement}>
                        <Field component={Input} className={classes.formInput} placeholder={'your surname...'} 
                                                                                validate={required} name={'surname'} />
                    </div>

                    <div className={classes.formPhoneNumber + " " + classes.formElement}>
                        <Field component={Input} className={classes.formInput} placeholder={'your phone number...'}
                                                                            validate={composeValidators(isActualPhoneNumber, required)}  name={'phoneNumber'} />
                    </div>
                    <div className={classes.formPassword + " " + classes.formElement}>
                        <Field component={Input} className={classes.formInput} placeholder={'your password...'}
                                                                                validate={composeValidators(required, maxLength15)} name={'password'} />    
                    </div>

                    <div className={classes.formRepeatPassword + " " + classes.formElement}>
                        <Field component={Input} className={classes.formInput} placeholder={'repeat password...'} 
                                                                                validate={composeValidators(required, maxLength15)} name={'repeatPassword'} />
                    </div>
                    <Button className={classes.formButton} text={'Зарегистрироваться'}/>
                    {props.submitError && <p className={classes.errorText}>{props.submitError}</p>}
                </form>
            )}
        </Form>
    );
};



export default Register;