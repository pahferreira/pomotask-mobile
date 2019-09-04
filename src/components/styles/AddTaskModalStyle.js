import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLACK_TRANSPARENT,
  },
  header: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    justifyContent: 'space-around',
    backgroundColor: Colors.WHITE,
    borderRadius: 11,
    paddingHorizontal: '5%',
    width: '75%',
    height: '45%',
  },
  footer: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 26,
    color: Colors.GREEN,
    fontFamily: 'IndieFlower',
  },
  input: {
    textAlignVertical: 'top',
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREEN,
    color: Colors.BLACK,
    borderRadius: 10,
    height: '60%',
  },
});

export default styles;
