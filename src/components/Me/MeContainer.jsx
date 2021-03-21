import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRedirect } from '../../hoc/withRedirect';
import { logout, setIsLoggedIn } from '../../redux/login-reducer';
import { getUserImage, getUserName, getUserSurname } from '../../redux/selectors/login-selectors';
import { getBoughtFlights } from '../../redux/selectors/register-selectors';
import Me from './Me';

const MeContainer = props => {
    return (
        <Me {...props} />
    );
};

const mapStateToProps = state => ({
    userName: getUserName(state),
    userSurname: getUserSurname(state),
    image: getUserImage(state),
    boughtFlights: getBoughtFlights(state) 
});

export default compose(
    connect(mapStateToProps, {logout, setIsLoggedIn}),
    withRedirect,
)(MeContainer);