import { AuthReducerActionTypes, Types } from './types';
import { success, error } from '@redux-requests/core';
import produce from 'immer';

const initialState = {
    users: [],
    loading: false,
    token: null,
    user: null,
    test: null
}

export default produce((draft = initialState, action: AuthReducerActionTypes) => {
    switch (action.type) {
        case Types.LOGIN:
            draft.loading = true;
            break;

        case success(Types.LOGIN):
            draft.loading = false;
            break;

        case error(Types.LOGIN):
            draft.loading = false;
            break;

        case Types.LOGOUT:
            draft = initialState;
            break;

        default:
            return draft;
    }
});