import { createSelector } from "reselect";

export const getSortedFlights = createSelector(
    state => state.search.flights,
    state => state.main.myFlight,
    (flights, myFlight) => {
        return flights.filter(flight => {
            let isSuitable = flight.to === myFlight.to && flight.from === myFlight.from && flight.whenThere === myFlight.whenThere && flight.whenBack === myFlight.whenBack;
            return isSuitable;
        });
    }
);

export const getChosenFlight = state => {
    return state.search.buyingFlight;
};

export const getMyId = state => {
    return state.login.id;
};