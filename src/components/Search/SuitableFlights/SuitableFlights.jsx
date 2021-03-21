import React from 'react';
import SuitableFlight from './SuitableFlight/SuitableFlight';
import classes from './SuitableFlights.module.css';

const SuitableFlights = props => {
    if (!props.flights[0]) {
        return <h1 className={classes.noFlights}>Oooops.. No flights found. We're sorry</h1>
    }
    let suitalbeFlights = props.flights.map(flight => <SuitableFlight to={flight.to} from={flight.from} 
                                                                        whenThere={flight.whenThere} whenBack={flight.whenBack} price={flight.price}
                                                                        setTicketToChosenFlight={props.setTicketToChosenFlight} />)

    return (
        <section className={classes.suitableFlights}>
            <div className="container">
                <div className={classes.suitableFlightsContainer}>
                    {suitalbeFlights}
                </div>
            </div>
        </section>
    );
};

export default SuitableFlights;