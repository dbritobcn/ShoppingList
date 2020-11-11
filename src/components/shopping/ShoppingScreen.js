import React from 'react';
import {Text, View} from 'react-native';
import commonStyles from '../../assets/styles/common';
import ShoppingList from './ShoppingList';

const ShoppingScreen = () => {
  return (
    <View style={commonStyles.body}>
      <ShoppingList onPress={this.handlePress} />
    </View>
  );
};

export default ShoppingScreen;
