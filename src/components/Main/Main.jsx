import React from 'react';
import BookFlightContainer from './BookFlight/BookFlightContainer';
import MainPromotionsContainer from './Promotions/MainPromotionsContainer';
import SubscribeToPromotionsContainer from './SubscribeToPromotions/SubscribeToPromotionsContainer';
import WereTrustworthyContainer from './WereTrustworthy/WereTrustworthyContainer';

const Main = props => {
    return (
        <>
            <div className="container">
                <main>
                    <WereTrustworthyContainer />
                    <BookFlightContainer />
                    <MainPromotionsContainer />
                    <SubscribeToPromotionsContainer />
                </main>
            </div>
        </>

    );
};

export default Main;