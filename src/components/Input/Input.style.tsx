import {StyleSheet} from 'react-native';
import { Colors } from '../../themes/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  input_container: {
    borderWidth: 1,
    margin: 5,
    padding: 4,
    borderRadius: 5,
    borderColor: Colors.outline,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
