import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {vh} from 'react-native-expo-viewport-units';
import ShoppingItem from './ShoppingItem';
import ShoppingAddNewItem from './ShoppingAddNewItem';
import {database} from '../../../Setup';
import {addProduct, deleteProduct} from './../../libs/services/grocery.service';
import commonStyles from '../../assets/styles/common';

type Props = {};

class ShoppingList extends Component<Props> {
  state = {
    shoppingList: [],
    loading: true,
  };

  componentDidMount() {
    this.setState({loading: true});
    const shoppingListRef = database().ref('groceryList');
    const onLoadingListener = shoppingListRef.on('value', (snapshot) => {
      let products = [];
      snapshot.forEach((childSnapshot) => {
        products = [...products, childSnapshot.val()];
      });
      this.setState({shoppingList: products, loading: false});
    });
  }

  componentWillUnmount(): void {
    const shoppingListRef = database().ref('groceryList');
    shoppingListRef.off('value');
  }

  addProduct = (product) => {
    const id = Date.now();
    addProduct(id, product)
      .then(() => {})
      .catch((error) => {
        Alert.alert('Error', error);
      });
  };

  deleteItem = (item) => {
    deleteProduct(item.id)
      .then(() => {})
      .catch((error) => {
        Alert.alert('Error', error);
      });
  };

  keyExtractor = (item) => item.id.toString();

  render() {
    const {shoppingList, loading} = this.state;

    return (
      <View style={commonStyles.body}>
        {loading ? (
          <ActivityIndicator
            style={commonStyles.loader}
            color="#fff"
            size="large"
          />
        ) : (
          <View style={styles.container}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.shoppingList}
              style={styles.list}
              ListEmptyComponent={() => (
                <Text style={styles.emptyList}>La lista está vacía</Text>
              )}
              renderItem={({item}) => (
                <ShoppingItem item={item} delete={this.deleteItem} />
              )}
            />
            <ShoppingAddNewItem style={styles.input} addSubmit={this.addProduct} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  list: {
    height: vh(80),
  },
  emptyList: {
    marginBottom: 50,
    marginTop: 50,
    textAlign: 'center',
  },
  input: {
    height: vh(20),
  },
});

export default ShoppingList;
