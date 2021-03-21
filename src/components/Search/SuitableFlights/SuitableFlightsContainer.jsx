import React from 'react';
import { connect } from 'react-redux';
import { getSortedFlights } from '../../../redux/selectors/search-selectors';
import SuitableFlights from './SuitableFlights';
import { setTicketToChosenFlight } from '../../../redux/search-reducer';

const SuitableFlightsContainer = props => {
    return (
        <SuitableFlights {...props} />
    );
};

const mapStateToProps = state => ({
    flights: getSortedFlights(state)  
});

export default connect(mapStateToProps, {setTicketToChosenFlight} )(SuitableFlightsContainer);