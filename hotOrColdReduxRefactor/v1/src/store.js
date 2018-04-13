import {createStore} from 'redux';
import {stateReducer} from './reducers';

export default createStore(stateReducer);