import {StyleSheet} from 'react-native';
import Colors from '../themes/colors';
import Fonts from '../themes/fonts';

export default StyleSheet.create({
  header: {
    width: '100%',
    padding: Fonts.fifteen,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
  headTxt: {color: Colors.white, fontSize: Fonts.fourteen},
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Fonts.twenty,
    backgroundColor: Colors.transparent,
  },
  modalView: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: Fonts.ten,
    padding: Fonts.fifteen,
  },
  modalTxt: {
    color: Colors.blue,
    fontSize: Fonts.fourteen,
    fontWeight: 'bold',
  },
  modalInp: {
    borderWidth: 0.5,
    borderColor: Colors.blue,
    paddingVertical: Fonts.five,
    marginVertical: Fonts.fifteen,
    borderRadius: Fonts.ten,
  },
  btnVw: {
    flexDirection: 'row',
    marginTop: Fonts.fifteen,
  },
  touch: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: Fonts.twelve,
    borderRadius: Fonts.thirty,
    alignItems: 'center',
    flex: 1,
  },
  touchTxt: {
    fontSize: Fonts.fourteen,
    color: Colors.blue,
  },
  cancel: {backgroundColor: Colors.lightGrey, marginRight: Fonts.five},
  save: {backgroundColor: Colors.blue, marginLeft: Fonts.five},
  icon: {marginHorizontal: Fonts.five},
  check: {position: 'absolute', right: 3},
  selectAll: {
    position: 'absolute',
    right: 2,
    bottom: 3,
    color: Colors.white,
    fontSize: Fonts.eight,
  },
  empVw: {alignContent: 'center', justifyContent: 'center', flex: 1},
  empty: {
    height: 100,
    width: 100,
    tintColor: Colors.blue,
    alignSelf: 'center',
  },
  emptyTxt: {
    color: Colors.blue,
    fontSize: Fonts.fifteen,
    alignSelf: 'center',
    marginTop: Fonts.five,
    fontWeight: '900',
  },
  card: {
    flexDirection: 'row',
    padding: Fonts.ten,
    backgroundColor: Colors.white,
    elevation: 1,
    marginHorizontal: Fonts.ten,
    margin: Fonts.five,
    borderRadius: Fonts.ten,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  margin: {marginRight: Fonts.ten},
  txtBold: {
    fontWeight: 'bold',
    color: Colors.blue,
  },
  txt2: {
    color: 'grey',
  },
});
