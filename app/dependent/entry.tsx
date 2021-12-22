import * as React from 'react';
import Page from '@root/index';
import Second from '@root/second/[idx]';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setNavigationObject} from '@dependent/navigation';

const Stack = createNativeStackNavigator();

const App = (): React.ReactElement => {
  const linking = {
    prefixes: [],
    config: {
      screens: {
        Home: '',
        Second: 'second/:idx',
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <InApp />
    </NavigationContainer>
  );
};
const InApp = (): React.ReactElement => {
  setNavigationObject();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Page} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
};

export default App;
