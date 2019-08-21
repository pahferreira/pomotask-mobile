import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    width: 80,
    height: 40,
    borderRadius: 10,
  },
  text: {
    color: Colors.WHITE,
  },
});

export default styles;
