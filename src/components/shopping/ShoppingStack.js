import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingScreen from './ShoppingScreen';
import Colors from '../../res/colors';

const Stack = createStackNavigator();

const ShoppingStack = () => {
  return <ShoppingScreen />;
};

export default ShoppingStack;
