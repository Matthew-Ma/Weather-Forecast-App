import { weatherReducer } from '../../reducers/weatherReducer';

const mockData = { item: 'item1' };

describe('weather reducer:', () => {
    const initialState = {
        weatherData: [],
        isError: false,
    };

    it('returns the initial state correctly', () => {
        const reducer = weatherReducer(undefined, {});
        const expectedActions = {
            weatherData: [],
            isError: false,
        };
        expect(reducer).toEqual(expectedActions);
    });

    it('handles FETCH_WEATHER_START as expected', () => {
        const reducer = weatherReducer(initialState, {
            type: 'FETCH_WEATHER_START',
        });
        const expectedActions = {
            weatherData: [],
            isError: false,
        };
        expect(reducer).toEqual(expectedActions);
    });

    it('handles FETCH_WEATHER_SUCCESS as expected', () => {
        const reducer = weatherReducer(initialState, {
            type: 'FETCH_WEATHER_SUCCESS',
            payload: {
                forecast: { consolidated_weather: mockData },
            },
        });
        const expectedActions = {
            weatherData: mockData,
            isError: false,
        };
        expect(reducer).toEqual(expectedActions);
    });

    it('handles FETCH_WEATHER_ERROR as expected', () => {
        const reducer = weatherReducer(initialState, {
            type: 'FETCH_WEATHER_ERROR',
        });
        const expectedActions = {
            weatherData: [],
            isError: true,
        };
        expect(reducer).toEqual(expectedActions);
    });
});
