import React from 'react';
import { connect } from 'react-redux';
import Register from './Register';
import { setUserData } from '../../redux/register-reducer';
import { getUsers } from '../../redux/selectors/register-selectors';

const RegisterContainer = props => {
    return (
        <Register {...props} />
    );
};

const mapStateToProps = state => ({
    users: getUsers(state)
});

export default connect(mapStateToProps, {setUserData})(RegisterContainer);