import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../theme/Theme';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height,
    alignItems: 'center',
    padding: '5%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: +2,
    backgroundColor: Colors.WHITE,
  },
  overlay: {
    width,
    height,
    position: 'absolute',
    backgroundColor: Colors.BLACK_TRANSPARENT,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  listContainer: {
    width: '100%',
  },
  text: {
    fontFamily: 'Roboto',
    color: Colors.BLACK,
  },
  title: {
    fontSize: 40,
    fontFamily: 'IndieFlower',
    marginVertical: 20,
    color: Colors.GREEN,
  },
});

export default styles;
