const SET_TICKET_TO_CHOSEN_FLIGHT = 'SET_TICKET_TO_CHOSEN_FLIGHT';

let initialValue = {
    flights: [{ from: 'Ufa', to: 'Moscow', whenThere: '2021-03-20', whenBack: '2021-03-22', price: 7000 },
            { from: 'Ufa', to: 'Moscow', whenThere: '2021-03-20', whenBack: '2021-03-22', price: 2000 },
            { from: 'Ufa', to: 'Moscow', whenThere: '2021-03-20', whenBack: '2021-03-22', price: 3000 },
            { from: 'Ufa', to: 'Moscow', whenThere: '2021-03-20', whenBack: '2021-03-22', price: 1500 },
            { from: 'Ufa', to: 'Moscow', whenThere: '2021-03-20', whenBack: '2021-03-22', price: 10000 },
            { from: 'Moscow', to: 'Ufa', whenThere: '2021-03-15', whenBack: '2021-03-18', price: 2500 },
            { from: 'Ufa', to: 'Ekaterinburg', whenThere: '2021-03-20', whenBack: '2021-03-22', price: 5000 }],
    buyingFlight: {}
};

const searchReducer = (state = initialValue, action) => {
    switch (action.type) {
        case SET_TICKET_TO_CHOSEN_FLIGHT:
            return {
                ...state,
                buyingFlight: {
                    to: action.to,
                    from: action.from,
                    whenThere: action.whenThere,
                    whenBack: action.whenBack,
                    price: action.price
                }
            };
        default:
            return state;
    }
};

export const setTicketToChosenFlight = flight => ({type: SET_TICKET_TO_CHOSEN_FLIGHT, ...flight});

export default searchReducer;