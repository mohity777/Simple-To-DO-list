import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Modal, TextInput} from 'react-native';
import Colors from '../themes/colors';
import {STRINGS} from '../utils/constants';
import ReusableButton from './reusableButton';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

const ToDoModal = (props) => {
  const {visible, closeModal, onPressSave} = props;

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');

  const onDatePressed = () => {
    setMode('date');
    setShow(true);
  };

  const onTimePressed = () => {
    setMode('time');
    setShow(true);
  };

  const onChange = (val) => {
    setShow(false);
    if (mode === 'date' && val.type === 'set')
      setDate(new Date(val.nativeEvent.timestamp));
    if (mode === 'time' && val.type === 'set')
      setTime(new Date(val.nativeEvent.timestamp));
  };

  const closeAndReset = () => {
    closeModal();
    setDate(new Date());
    setTime(new Date());
    setInput('');
  };

  const getDate = (date) => {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const getTime = (date) => {
    let hour = time.getHours();
    let mins = time.getMinutes();
    if (hour == 0) hour = '00';
    if (mins < 10) mins = '0' + mins;
    return `${hour}:${mins}`;
  };

  return (
    <>
      <Modal
        visible={visible}
        transparent={true}
        visible={visible}
        hardwareAccelerated={true}
        animationType="fade"
        onRequestClose={closeAndReset}>
        <TouchableOpacity onPress={closeModal} style={styles.modal}>
          <View onStartShouldSetResponder={() => true} style={styles.modalView}>
            <Text style={styles.modalTxt}>{STRINGS.enter}</Text>
            <TextInput
              autoFocus={true}
              style={styles.modalInp}
              value={input}
              onChangeText={(val) => setInput(val)}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: Colors.blue}}>
                {STRINGS.expDate}
                {getDate(date)}
              </Text>
              <Icon
                onPress={onDatePressed}
                name="calendar-month-outline"
                size={20}
                color={Colors.blue}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: Colors.blue}}>
                {STRINGS.expTime}
                {getTime(date)}
              </Text>
              <Icon
                onPress={onTimePressed}
                name="clock-time-four-outline"
                size={20}
                color={Colors.blue}
              />
            </View>
            <View style={styles.btnVw}>
              <ReusableButton
                title={STRINGS.cancel}
                onPress={closeAndReset}
                style={styles.cancel}
              />
              <ReusableButton
                title={STRINGS.save}
                onPress={() => {
                  onPressSave(input, getDate(date), getTime(time));
                  closeAndReset();
                }}
                txtStyle={{color: Colors.white}}
                style={styles.save}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          minimumDate={new Date()}
          value={mode === 'date' ? date : time}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};

export default ToDoModal;
