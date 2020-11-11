import {StyleSheet} from 'react-native';
import {vh} from 'react-native-expo-viewport-units';
import colors from '../../res/colors';

const commonStyles = StyleSheet.create({
  body: {
    backgroundColor: '#efefef',
    minHeight: vh(100),
    padding: 15,
  },
  h1: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});

export default commonStyles;
