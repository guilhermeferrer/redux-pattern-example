import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import "regenerator-runtime/runtime";
import { enableES5 } from 'immer';

enableES5();
import { requestsMiddleware } from './modules/rootInterceptor';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    // @ts-ignore
    persistedReducer,
    applyMiddleware(...requestsMiddleware, sagaMiddleware),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {
    store,
    persistor
}