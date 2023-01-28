import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddUserScreen from './src/AddUserScreen';
import UserScreen from './src/UserScreen';
import UserDetailScreen from './src/UserDetailScreen';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0085e6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName="AddUserScreen">
        <Stack.Screen
          name="AddUserScreen"
          component={AddUserScreen}
          options={{title: 'Add User'}}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{title: 'User Screen'}}
        />
        <Stack.Screen
          name="UserDetailScreen"
          component={UserDetailScreen}
          options={{title: 'User Detail'}}
        />
      </Stack.Navigator>
    );
  };

export default function App() {
  return (
    <NavigationContainer>
  <MyStack />
</NavigationContainer>
  )
}