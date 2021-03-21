import { createSelector } from "reselect";

export const getUsers = state => {
    return state.register.users;
};

export const getBoughtFlights = createSelector(
    state => state.login.id,
    state => state.register.users,
    (userId, users) => {
        let object = users.find(user => {
            return user.id === userId;
        });
        
        if (object) return object.boughtFlights;
    }
);