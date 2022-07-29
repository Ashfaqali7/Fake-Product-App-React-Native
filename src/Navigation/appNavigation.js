// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginForm from '../Screen/Login';
import HomeScreen from '../Screen/Home';
import PDetails from '../Screen/Details';
import After from '../Screen/Practice/after';
import MyProducts from '../Screen/Practice/Product';
const Stack = createNativeStackNavigator();

function MyNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Product" component={MyProducts} />
        <Stack.Screen name="After" component={After} /> */}
        <Stack.Screen
          options={{
            title: 'SIGN IN',
            headerStyle: {
              backgroundColor: '#264653',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerTitleAlign: 'center',
          }}
          name="Login"
          component={LoginForm}
        />
        <Stack.Screen
          options={{
            title: 'Shopping Card',
            headerStyle: {
              backgroundColor: '#264653',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerTitleAlign: 'center',
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            title: 'Product Details',
            headerStyle: {
              backgroundColor: '#264653',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerTitleAlign: 'center',
          }}
          name="Details"
          component={PDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyNavigation;
