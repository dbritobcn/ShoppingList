import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import formsStyles from '../../assets/styles/forms';

class ShoppingAddNewItem extends Component<Props> {
  state = {
    inputValue: '',
  };

  onPressFunction = () => {
    this.props.addSubmit(this.state.inputValue);
    this.setState({inputValue: ''});
  };

  setText = text => {
    this.setState({inputValue: text});
  };

  render() {
    const {inputValue} = this.state;

    return (
      <View style={formsStyles.view}>
        <TextInput
          style={[formsStyles.input, styles.input]}
          onChangeText={this.setText}
          placeholder="Add an item"
          value={inputValue}
        />
        <TouchableOpacity
          style={[formsStyles.button, styles.button]}
          activeOpacity={0.8}
          onPress={this.onPressFunction}>
          <Text style={formsStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: {
    borderRadius: 50,
    height: 32,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: 10,
    padding: 0,
    width: 32,
  },
  input: {
    flex: 1,
  },
};

export default ShoppingAddNewItem;
