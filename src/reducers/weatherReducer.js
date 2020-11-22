import { WeatherActionTypes } from '../constants/actionType';

const initialState = {
    weatherData: [],
    isError: false,
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER_START:
            return state;
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weatherData: action.payload.forecast.consolidated_weather,
            };
        case WeatherActionTypes.FETCH_WEATHER_ERROR:
            return {
                ...state,
                isError: true,
            };
        default:
            return state;
    }
};
