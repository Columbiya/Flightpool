let initialValue = {
    isLoggedIn: false,
    name: '',
    surname: '',
    id: null,
    image: null
};

const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const LOGOUT = 'LOGOUT';

const loginReducer = (state = initialValue, action) => {
    switch(action.type) {
        case SET_IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            };
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                name: action.name,
                surname: action.surname,
                id: action.id
            };
        case LOGOUT:
            return {
                ...state,
                name: '',
                surname: '',
                id: null,
                image: null
            };
        default:
            return state;
    }
};

export const setIsLoggedIn = isLoggedIn => ({type: SET_IS_LOGGED_IN, isLoggedIn});
export const setUserAuthData = (name, surname, id) => ({type: SET_USER_AUTH_DATA, name, surname, id});
export const logout = () => ({type: LOGOUT});

export default loginReducer;