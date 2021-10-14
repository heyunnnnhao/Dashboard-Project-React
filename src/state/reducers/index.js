import { combineReducers } from 'redux';
import { bankReducer } from './reducers';

const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers;
