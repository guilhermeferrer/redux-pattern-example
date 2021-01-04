import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import Routes from './routes';

const Main: React.FC = () => {
    
    return (
        <NavigationContainer>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes />
                </PersistGate>
            </Provider>
        </NavigationContainer>
    );
}

export default Main;