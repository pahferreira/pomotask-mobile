import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLUE,
    padding: 10,
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  icon: {
    fontSize: 30,
    color: Colors.WHITE,
  },
});

export default styles;
