import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../themes/colors';
import Fonts from '../themes/fonts';
import styles from './styles';

const ReusableButton = (props) => {
  const {txtStyle, title, style, iconName, onPress} = props;
  return (
    <TouchableOpacity style={[styles.touch, style]} onPress={onPress}>
      {iconName && (
        <Icon
          style={styles.icon}
          name={iconName}
          size={Fonts.twenty2}
          color={Colors.blue}
        />
      )}
      <Text style={[styles.touchTxt, txtStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ReusableButton;
