import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 34,
    borderRadius: 10,
  },
  text: {
    color: Colors.WHITE,
  },
  icon: {
    marginLeft: 10,
  },
});

export default styles;
