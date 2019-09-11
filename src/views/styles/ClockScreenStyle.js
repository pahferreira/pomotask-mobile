import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../theme/Theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    backgroundColor: Colors.WHITE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  overlay: {
    width,
    height,
    zIndex: 1,
    position: 'absolute',
    backgroundColor: Colors.BLACK_TRANSPARENT,
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
