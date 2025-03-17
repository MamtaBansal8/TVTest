import { HOME_SCREEN_FAILURE, HOME_SCREEN_REQUEST, HOME_SCREEN_SUCCESS } from './actionTypes';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_SCREEN_REQUEST:
      return { ...state, loading: true };
    case HOME_SCREEN_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case HOME_SCREEN_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default homeReducer;