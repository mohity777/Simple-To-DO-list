import React from 'react';
import {View, Text, Image} from 'react-native';
import Images from '../themes/images';
import {STRINGS} from '../utils/constants';
import styles from './styles';

const EmptyScreen = (props) => {
  return (
    <View style={styles.empVw}>
      <Image source={Images.empty} style={styles.empty} resizeMode="contain" />
      <Text style={styles.emptyTxt}>{STRINGS.empty}</Text>
    </View>
  );
};

export default EmptyScreen;
