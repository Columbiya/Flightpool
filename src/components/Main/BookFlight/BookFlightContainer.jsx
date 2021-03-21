import React from 'react';
import BookFlight from './BookFlight';
import { setMyFlight } from '../../../redux/mainPage-reducer';
import { connect } from 'react-redux';

const BookFlightContainer = props => {

    return (
        <BookFlight {...props} />
    );
};


export default connect(null, {setMyFlight})(BookFlightContainer);