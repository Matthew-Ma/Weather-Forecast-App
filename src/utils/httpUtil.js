import { httpBase } from './httpBaseUtil';
import { API_LOCATION_URL, API_WEATHER_URL } from '../config/config';
import axios from 'axios';

let cancelToken;
export const searchLocationByTerm = (location) => {
    if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel('Operation canceled due to new request.');
    }

    cancelToken = axios.CancelToken.source();
    return httpBase().get(API_LOCATION_URL, {
        params: {
            query: location,
        },
        cancelToken: cancelToken.token,
    });
};

export const searchLocationByCoordinates = (position) => {
    return httpBase().get(API_LOCATION_URL, {
        params: {
            lattlong: `${position.coords.latitude},${position.coords.longitude}`,
        },
    });
};

export const fetchWeather = (woeid) => {
    return httpBase().get(`${API_WEATHER_URL}${woeid}`);
};
