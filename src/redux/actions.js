import { HOME_SCREEN_FAILURE, HOME_SCREEN_REQUEST, HOME_SCREEN_SUCCESS, SPLASH_SCREEN_FAILURE, SPLASH_SCREEN_REQUEST, SPLASH_SCREEN_SUCCESS } from './actionTypes';
import axios from 'axios';
import { data } from '../jsonData/splash';
import { homeData } from '../jsonData/home';


export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: SPLASH_SCREEN_REQUEST });

    try {
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const response = data.movies_with_media
      dispatch({ type: SPLASH_SCREEN_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: SPLASH_SCREEN_FAILURE, error: error.message });
    }
  };
};

export const fetchHomeData = () => {
  return async (dispatch) => {
    dispatch({ type: HOME_SCREEN_REQUEST });

    try {
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const response = homeData.movies
      dispatch({ type: HOME_SCREEN_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: HOME_SCREEN_FAILURE, error: error.message });
    }
  };
};