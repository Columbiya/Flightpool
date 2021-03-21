import React from 'react';
import { connect } from 'react-redux';
import { getWhyWeAreTrusted } from '../../../redux/selectors/main-selectors';
import WereTrustworthy from './WereTrustworthy';

const WereTrustworthyContainer = props => {
    return (
        <WereTrustworthy {...props} />
    );
}

const mapStateToProps = state => ({
    whyWereTrusted: getWhyWeAreTrusted(state)
});

export default connect(mapStateToProps, null)(WereTrustworthyContainer)