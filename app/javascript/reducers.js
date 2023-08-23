// app/javascript/reducers.js
import { combineReducers } from 'redux';
import greetingReducer from './reducers/greetingReducer';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;
