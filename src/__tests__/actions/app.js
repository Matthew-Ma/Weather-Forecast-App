import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setIsLoading } from '../../actions/app';

const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('app actions:', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('dispatches IS_LOADING action', async () => {
        await store.dispatch(setIsLoading(true));
        const actions = store.getActions();
        const expectedActions = [{ type: 'IS_LOADING', payload: true }];
        expect(actions).toEqual(expectedActions);
    });
});
