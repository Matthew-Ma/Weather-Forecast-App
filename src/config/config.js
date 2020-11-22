export const PROXY = 'https://cors-anywhere.herokuapp.com/';
export const APP_HOST = process.env.APP_HOST || 'www.metaweather.com';
export const HOST = `${PROXY}${APP_HOST}/`;
export const API_LOCATION_PATH = 'api/location/';
export const ICON_PATH = 'static/img/weather/';
export const API_LOCATION_URL = `${API_LOCATION_PATH}search/`;
export const API_WEATHER_URL = `${API_LOCATION_PATH}`;
export const ICON_URL = `https://${APP_HOST}/${ICON_PATH}`;
export const DAYS_TO_DISPLAY = 4;
export const SEARCH_ITEMS_TO_DISPLAY = 10;