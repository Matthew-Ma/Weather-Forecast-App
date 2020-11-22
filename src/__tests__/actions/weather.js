import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { HOST, API_WEATHER_URL } from '../../config/config';
import {
    fetchWeatherStart,
    fetchWeatherSuccess,
    fetchWeatherFail,
    fetchWeatherFromApi,
} from '../../actions/weather';

const mockData = { item: 'item1' };
const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);
const store = mockStore();

describe('weather actions:', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('dispatches FETCH_WEATHER_START action', async () => {
        await store.dispatch(fetchWeatherStart());
        const actions = store.getActions();
        const expectedActions = [{ type: 'FETCH_WEATHER_START' }];
        expect(actions).toEqual(expectedActions);
    });

    it('dispatches FETCH_WEATHER_SUCCESS action and returns data on success', async () => {
        await store.dispatch(fetchWeatherSuccess(mockData));
        const actions = store.getActions();
        const expectedActions = [
            {
                type: 'FETCH_WEATHER_SUCCESS',
                payload: { forecast: mockData },
            },
        ];
        expect(actions).toEqual(expectedActions);
    });

    it('dispatches FETCH_WEATHER_ERROR action', async () => {
        await store.dispatch(fetchWeatherFail(true));
        const actions = store.getActions();
        const expectedActions = [
            { type: 'FETCH_WEATHER_ERROR', payload: true },
        ];
        expect(actions).toEqual(expectedActions);
    });

    it('fetch data from weather api', async () => {
        const woeid = 123;
        mock.onGet(`${HOST}${API_WEATHER_URL}${woeid}`).reply(200, {
            response: mockData,
        });
        await store.dispatch(fetchWeatherFromApi(woeid));
        const actions = store.getActions();
        const expectedActions = [
            { type: 'IS_LOADING', payload: true },
            { type: 'FETCH_WEATHER_START' },
            {
                type: 'FETCH_WEATHER_SUCCESS',
                payload: { forecast: { response: mockData } },
            },
            { type: 'IS_LOADING', payload: false },
        ];
        expect(actions).toEqual(expectedActions);
    });
});
