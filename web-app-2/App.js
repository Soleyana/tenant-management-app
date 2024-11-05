import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TenantForm from './TenantForm';
import RequestList from './RequestList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TenantForm">
        <Stack.Screen name="Submit Request" component={TenantForm} />
        <Stack.Screen name="Request List" component={RequestList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
