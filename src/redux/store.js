import { combineReducers, createStore } from 'redux';
import loginReducer from './login-reducer';
import mainPage from './mainPage-reducer';
import registerReducer from './register-reducer';
import searchReducer from './search-reducer';


const reducers = combineReducers({
    main: mainPage,
    register: registerReducer,
    login: loginReducer,
    search: searchReducer
});


const store = createStore(reducers);

export default store;