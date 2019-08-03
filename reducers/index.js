import { combineReducers } from 'redux';
import stories from './storiesReducer';


const appReducer = combineReducers({
  stories,
});


export default appReducer;
