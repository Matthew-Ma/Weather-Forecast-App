import { AppActionTypes } from '../constants/actionType';

export const setIsLoading = (loading) => ({
    type: AppActionTypes.IS_LOADING,
    payload: loading,
});
