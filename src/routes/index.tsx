import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@pages/Home';

const routes: React.FC = () => {

    const { Navigator, Screen } = createStackNavigator();

    return (
        <Navigator>
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}

export default routes;