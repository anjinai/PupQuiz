import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/home';
import Quiz from '../components/quiz';
import Results from '../components/results';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

export default MyStack;
