import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { setUserAuthData, setIsLoggedIn } from '../../redux/login-reducer';
import { getIsLoggedIn } from '../../redux/selectors/login-selectors'; 
import { getUsers } from '../../redux/selectors/register-selectors';

const LoginContainer = props => {
    return (
        <Login {...props} />
    );
};

const mapStateToProps = state => ({
    users: getUsers(state),
    isLoggedIn: getIsLoggedIn(state),
});

export default connect(mapStateToProps, {setUserAuthData, setIsLoggedIn})(LoginContainer);