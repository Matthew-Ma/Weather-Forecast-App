import { AppActionTypes } from '../constants/actionType';

const initialState = {
    isLoading: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case AppActionTypes.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};
