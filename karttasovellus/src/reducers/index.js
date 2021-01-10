import { combineReducers } from 'redux';
import markerReducer from './markers';

// koko kaikki reducerot yhteen. Tähän pystyisi laajentamaan helposti ilman että tarvitsee muuttaa jatkoa
const allReducers = combineReducers({
    markers: markerReducer
})

export default allReducers;