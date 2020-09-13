import {StyleSheet} from 'react-native';
import Colors from '../themes/colors';
import Fonts from '../themes/fonts';

const styles = StyleSheet.create({
  touch: {
    backgroundColor: Colors.blue,
    height: Fonts.twenty * 3.3,
    width: Fonts.twenty * 3.3,
    borderRadius: Fonts.twenty * 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
  },
  btm: {
    backgroundColor: Colors.blue,
    width: '100%',
    padding: Fonts.fifteen,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn1: {backgroundColor: Colors.white, marginRight: Fonts.five},
  btn2: {backgroundColor: Colors.white, marginLeft: Fonts.five},
});
export default styles;
