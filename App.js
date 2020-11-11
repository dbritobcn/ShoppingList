import React from 'react';
import {SafeAreaView} from 'react-native';
import ShoppingStack from './src/components/shopping/ShoppingStack';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <ShoppingStack />
    </SafeAreaView>
  );
};

export default App;
