import React from 'react';
import { connect } from 'react-redux';
import { getChosenFlight, getMyId } from '../../../redux/selectors/search-selectors';
import BuyTickets from './BuyTickets';
import { addBoughtFlight } from '../../../redux/register-reducer';
import { compose } from 'redux';
import { withRedirect } from '../../../hoc/withRedirect';

const BuyTicketsContainer = props => {
    return (
        <BuyTickets {...props} />
    );
};

const mapStateToProps = state => ({
    flight: getChosenFlight(state),
    myId: getMyId(state)
});

export default compose(
    connect(mapStateToProps, { addBoughtFlight }),
    withRedirect)
    (BuyTicketsContainer);