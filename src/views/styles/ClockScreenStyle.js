import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'flex-end',
    width: '100%',
  },
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  optionsContainer: {
    width: 100,
  },
  optionText: {
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
