//store
import { createStore } from 'redux';
import counterReducer from './reducers/counter';

const store = createStore(counterReducer);

export defeault store;

// actions
{
    type: '',
    payload: //fdsfdsfolm
}

// action creator - function that returns an object
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const increment = () => {
    return {
        type: INCREMENT_COUNTER,
        number
    }
}
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
const decrement = () => {
    return {
        type: DECREMENT_COUNTER,
        number
    }
}
export default INCREMENT_COUNTER
export default DECREMENT_COUNTER


// reducers
import INCREMENT_COUNTER from './actions/counter';
import DECREMENT_COUNTER from './actions/counter';

const initialState = {
    counter: 0,
    name: 'blah'
}

const countReducer = (state = initialState, actions) => {
    if (action.type === INCREMENT_COUNTER) {
        return {
            ...state,
            count: state.counter + action.number
        }
    } else if (action.type === DECREMENT_COUNTER) {
        return {
            ...state,
            count: state.counter - action.number
        }
    }

    return state
}

export default counterReducer


// dispatch
console.log(store.getState())
store.dispatch(increment(10))
