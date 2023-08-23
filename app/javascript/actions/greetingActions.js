// app/javascript/actions/greetingActions.js
export const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';

export const fetchRandomGreeting = () => (dispatch) => {
  // Replace with your API call to fetch a random greeting
  const randomGreeting = 'Hello from Redux!';

  dispatch({
    type: FETCH_RANDOM_GREETING_SUCCESS,
    payload: randomGreeting,
  });
};
