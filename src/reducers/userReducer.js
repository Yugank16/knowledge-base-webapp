import initialState from 'reducers/initialState.json';
import { LOG_IN, LOG_OUT, UPDATE_USER } from 'actions/actionTypes';

const authReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.user;
    case LOG_OUT:
      return null;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
};
export default authReducer;
