import React from 'react';
import { connect } from 'react-redux';
import { getPromotions } from '../../../redux/selectors/main-selectors';
import MainPromotions from './MainPromotions';

const MainPromotionsContainer = props => {

    return (
        <MainPromotions {...props} />
    );
};

const mapDispatchToProps = state => ({
    promotions: getPromotions(state)
});

export default connect(mapDispatchToProps, null)(MainPromotionsContainer);