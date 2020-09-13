import CheckBox from '@react-native-community/checkbox';
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  UIManager,
  LayoutAnimation,
  Platform,
  ToastAndroid,
} from 'react-native';
import {setToDo} from '../context/action';
import {GlobalContext} from '../context/store';
import Colors from '../themes/colors';
import {STRINGS} from '../utils/constants';
import styles from './styles';

const Header = (props) => {
  const {state, dispatch} = useContext(GlobalContext);
  const {tab} = state;
  const [check, setCheck] = useState(false);

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const onValueChange = (newVal) => {
    setCheck(newVal);
    let newList = state[tab].list;
    if (!newList.length) {
      ToastAndroid.show(STRINGS.empty, ToastAndroid.SHORT);
      return;
    }
    for (let i = 0; i < newList.length; i++) newList[i].isChecked = newVal;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    dispatch(setToDo({list: newList, showBtm: newVal}, tab));
  };
  return (
    <View style={styles.header}>
      <Text style={styles.headTxt}>{STRINGS.header}</Text>
      <CheckBox
        style={styles.check}
        tintColors={{true: Colors.white, false: Colors.white}}
        value={check}
        onValueChange={onValueChange}
      />
      <Text style={styles.selectAll}>{STRINGS.select}</Text>
    </View>
  );
};

export default Header;
