import { combineReducers } from 'redux';
import dataReducer from './reducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  homeData: homeReducer
});

export default rootReducer;
