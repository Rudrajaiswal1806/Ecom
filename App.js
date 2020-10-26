import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './Screens/Login';
import RegisterScreen from './Screens/Register';
import HomeScreen from './Screens/Home';
import ProductDetailsScreen from './Screens/ProductDetails';
import CartScreen from './Screens/Cart';
import CategoryScreen from './Screens/Category';
import DrawerScreen from './Screens/Drawer';
import WishlistScreen from './Screens/Wishlist';
import TestScreen from './Screens/Test';
import ReduxScreen from './Screens/Redux';
import ButtonScreen from './Screens/Button';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Drawer" component={DrawerScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Redux" component={ReduxScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
      </Stack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerScreen {...props} />} >
        <Drawer.Screen  name="Home" component={MyStack} />        
      </Drawer.Navigator>     
    </NavigationContainer>

    
  );
}

export default App;

