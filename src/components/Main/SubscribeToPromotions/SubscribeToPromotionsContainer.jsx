import React from 'react';
import { connect } from 'react-redux';
import SubscribeToPromotions from './SubscribeToPromotions';
import { setSubscribers } from '../../../redux/mainPage-reducer';

const SubscribeToPromotionsContainer = props => {
    return (
        <SubscribeToPromotions {...props} />
    )
};


export default connect(null, {setSubscribers})(SubscribeToPromotionsContainer);