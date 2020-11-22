import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';
import { appReducer } from './appReducer';

export default combineReducers({
    weather: weatherReducer,
    app: appReducer,
});
