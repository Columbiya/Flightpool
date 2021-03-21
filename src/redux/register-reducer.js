import generator from '../utils/validators/idGenerator/idGenerator';

const makeUserId = generator();

let initialValue = {
    users: [
        { name: 'vova', surname: 'bykov', password: '123', phoneNumber: '+79174880097', boughtFlights: 0, id: makeUserId.next().value },
        { name: 'ko', surname: '123', password: '123', phoneNumber: '+79174880097', boughtFlights: 5, id: makeUserId.next().value }
    ]
};

const SET_USER_DATA = 'SET_USER_DATA';
const ADD_BOUGHT_FLIGHT = 'ADD_BOUGHT_FLIGHT'; 

const registerReducer = (state = initialValue, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                users: [...state.users, {...action.user, boughtFlights: 0, id: makeUserId.next().value}]
            }
        case ADD_BOUGHT_FLIGHT:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.id === user.id) {
                        user.boughtFlights++;
                    }

                    return user;
                })
            }
        default:
            return state;
    }
};

export const setUserData = (name, surname, phoneNumber, password) => ( {type: SET_USER_DATA, user: {name, surname, phoneNumber, password} } );
export const addBoughtFlight = id => ({type: ADD_BOUGHT_FLIGHT, id});

export default registerReducer;