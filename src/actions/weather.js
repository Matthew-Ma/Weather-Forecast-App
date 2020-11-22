import { fetchWeather } from '../utils/httpUtil';
import { WeatherActionTypes } from '../constants/actionType';
import { setIsLoading } from './app';

export const fetchWeatherStart = () => ({
    type: WeatherActionTypes.FETCH_WEATHER_START,
});

export const fetchWeatherSuccess = (forecast) => ({
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
    payload: { forecast },
});

export const fetchWeatherFail = (error) => ({
    type: WeatherActionTypes.FETCH_WEATHER_ERROR,
    payload: error,
});

export const fetchWeatherFromApi = (woeid) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        dispatch(fetchWeatherStart());
        try {
            const res = await fetchWeather(woeid);
            dispatch(fetchWeatherSuccess(res.data));
            dispatch(setIsLoading(false));
        } catch (err) {
            dispatch(fetchWeatherFail(err));
            dispatch(setIsLoading(false));
        }
    };
};
