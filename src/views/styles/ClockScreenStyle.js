import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../theme/Theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: '5%',
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
    flex: 8,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  optionsContainer: {
    width: 125,
  },
  optionText: {
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
  triggerOptionsContainer: {
    width: 30,
    alignItems: 'flex-end',
  },
});

export default styles;
