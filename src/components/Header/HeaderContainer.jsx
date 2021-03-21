import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { logout, setIsLoggedIn } from '../../redux/login-reducer';
import { getIsLoggedIn } from '../../redux/selectors/login-selectors'; 
import Header from './Header';

const HeaderContainer = props => {
    return (
        <Header {...props} />
    );
};

const mapStateToProps = state => ({
    isLoggedIn: getIsLoggedIn(state)
});

export default compose(
    withRouter,
    connect(mapStateToProps, { logout, setIsLoggedIn }),
)(HeaderContainer);