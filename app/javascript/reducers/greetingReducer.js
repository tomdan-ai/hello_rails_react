// app/javascript/reducers/greetingReducer.js
import { FETCH_RANDOM_GREETING_SUCCESS } from '../actions/greetingActions';

const initialState = {
  greeting: '',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export default greetingReducer;
