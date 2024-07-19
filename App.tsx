import React from 'react';
import Home from './src/views/Home/index.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes.ts';
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Main'}>
        {routes?.map(({name, component, options}) => (
          <Stack.Screen
            key={name}
            name={name}
            options={options}
            component={component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
