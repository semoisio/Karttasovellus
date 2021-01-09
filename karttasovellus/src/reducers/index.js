import { combineReducers } from 'redux';
import markerReducer from './markers';


const allReducers = combineReducers({
    markers: markerReducer
})

export default allReducers;