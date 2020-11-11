import React from 'react';
import {Text, View} from 'react-native';
import Swipeout from 'react-native-swipeout';
import listStyles from './../../assets/styles/lists';

const ShoppingItem = (props) => {
  const swipeoutBtns = [
    {
      text: 'Delete',
      onPress: () => {
        props.delete(props.item);
      },
    },
  ];

  return (
    <View style={listStyles.item}>
      <Swipeout
        right={swipeoutBtns}
        backgroundColor={'transparent'}
        autoClose={true}
        close={true}>
        <Text style={listStyles.text}>{props.item.title}</Text>
      </Swipeout>
    </View>
  );
};

export default ShoppingItem;
