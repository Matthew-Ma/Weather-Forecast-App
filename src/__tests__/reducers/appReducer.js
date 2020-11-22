import { appReducer } from '../../reducers/appReducer';

describe('app reducer:', () => {
    const initialState = {
        isLoading: false,
    };

    it('returns the initial state correctly', () => {
        const reducer = appReducer(undefined, {});
        const expectedActions = {
            isLoading: false,
        };
        expect(reducer).toEqual(expectedActions);
    });

    it('handles IS_LOADING as expected', () => {
        const reducer = appReducer(initialState, {
            type: 'IS_LOADING',
            payload: true,
        });
        const expectedActions = {
            isLoading: true,
        };
        expect(reducer).toEqual(expectedActions);
    });
});
