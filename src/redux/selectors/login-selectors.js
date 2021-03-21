export const getIsLoggedIn = state => {
    return state.login.isLoggedIn;
}

export const getUserName = state => {
    return state.login.name;
};

export const getUserSurname = state => {
    return state.login.surname;
};

export const getUserImage = state => {
    return state.login.image;  
};