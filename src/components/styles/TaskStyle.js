import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
    borderBottomWidth: 0.7,
    borderBottomColor: Colors.BLACK_TRANSPARENT,
  },
  text: {
    color: Colors.BLUE,
    fontFamily: 'Roboto',
    fontSize: Metrics.text.medium,
    width: '80%',
  },
  checkButton: {
    width: '8%',
  },
});

export default styles;
