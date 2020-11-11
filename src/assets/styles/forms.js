import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const formsStyles = StyleSheet.create({
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderStyle: 'solid',
    borderBottomColor: colors.charade,
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 15,
  },
  buttonText: {
    color: colors.white,
  },
  link: {
    color: colors.picton,
  },
});

export default formsStyles;
