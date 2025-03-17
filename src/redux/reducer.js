import { SPLASH_SCREEN_FAILURE, SPLASH_SCREEN_REQUEST, SPLASH_SCREEN_SUCCESS } from './actionTypes';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPLASH_SCREEN_REQUEST:
      return { ...state, loading: true };
    case SPLASH_SCREEN_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case SPLASH_SCREEN_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default dataReducer;