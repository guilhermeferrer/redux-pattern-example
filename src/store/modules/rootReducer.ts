import { combineReducers } from 'redux';
import { requestsReducer } from './rootInterceptor';

import auth from './auth/reducer';

export default combineReducers({
    auth,
    requestsReducer
});