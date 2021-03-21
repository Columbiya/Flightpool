import classes from './Login.module.css';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { Button, createFormElement } from '../common/FormControls/FormControls';
import Title from '../common/Title/Title';
import { FORM_ERROR } from 'final-form';
import { Redirect } from 'react-router';
import { required } from '../../utils/validators/validators';

const Input = createFormElement('input');

const Login = props => {
    if (props.isLoggedIn) return <Redirect to={'/me'} />

    return (
        <section className={classes.login}>
            <div className="container">
                <Title text={'Авторизируйтесь'} />
                <LoginForm users={props.users} setUserAuthData={props.setUserAuthData} setIsLoggedIn={props.setIsLoggedIn} />
            </div>
        </section>
    );
};

const LoginForm = props => {
    const onSubmit = formData => {
        for (let user of props.users) {
            let { name, surname, password, phoneNumber, id } = user;

            if (name === formData.name && surname === formData.surname &&
                password === formData.password && phoneNumber === formData.phoneNumber) {
                props.setUserAuthData(name, surname, id);
                props.setIsLoggedIn(true);
                return;
            }
        }

        return {
            [FORM_ERROR]: 'Неправильные данные. Попробуйте снова'
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            {props => (
                <form onSubmit={props.handleSubmit} className={classes.form}>
                    <div className={classes.formElement}>
                        <Field component={Input} name={'name'} className={classes.formName} validate={required} placeholder={'Your name'} />
                    </div>
                    <div className={classes.formElement}>
                        <Field component={Input} name={'surname'} className={classes.formSurname} validate={required} placeholder={'Your surname'} />
                    </div>
                    <div className={classes.formElement}>
                        <Field component={Input} name={'password'} className={classes.formPassword} validate={required} placeholder={'Your password'} />
                    </div>

                    <div className={classes.formElement}>
                        <Field component={Input} name={'phoneNumber'} className={classes.formPhoneNumber} validate={required}
                            placeholder={'Your phone number'} />
                    </div>

                    <Button className={classes.button} text={'Авторизироваться'} />
                    {props.submitError && <p className={classes.errorText}>{props.submitError}</p>}
                </form>
            )}
        </Form>
    );
};

export default Login;