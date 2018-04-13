import {SET_LANGUAGE} from '../actions';

// Add your code for the languageReducer
const initialState = {
    language: 'en'
}

export const languageReducer = (state = initialState, action) => {
    if (action.type === SET_LANGUAGE) {
        return action.payload;
    } else {
        return state;
    }
};
