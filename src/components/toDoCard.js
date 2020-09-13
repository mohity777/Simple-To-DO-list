import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import Colors from '../themes/colors';

const ToDoCard = ({item, setToggleCheckBox, index}) => {
  const {isChecked, title, date, time} = item;
  return (
    <View style={styles.card}>
      <CheckBox
        style={styles.margin}
        tintColors={{true: Colors.blue, false: Colors.blue}}
        value={isChecked}
        onValueChange={(newVal) => setToggleCheckBox(newVal, index)}
      />
      <View style={{flex: 1}}>
        <Text style={styles.txtBold}>{title}</Text>
        <Text style={styles.txt2}>{date}</Text>
        <Text style={styles.txt2}>{time}</Text>
      </View>
    </View>
  );
};

export default ToDoCard;
