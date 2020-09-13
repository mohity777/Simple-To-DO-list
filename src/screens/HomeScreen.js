import React, {useContext, useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  UIManager,
  LayoutAnimation,
  ToastAndroid,
  Platform,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Header from '../components/header';
import Colors from '../themes/colors';
import Fonts from '../themes/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlobalContext} from '../context/store';
import {setTab, setToDo, setVisible} from '../context/action';
import ToDoModal from '../components/toDoModal';
import ReusableButton from '../components/reusableButton';
import {STRINGS} from '../utils/constants';
import EmptyScreen from '../components/emptyScreen';
import ToDoCard from '../components/toDoCard';
import styles from './styles';

const HomeScreen = (props) => {
  const {state, dispatch} = useContext(GlobalContext);
  const {tab, visible} = state;
  const flatListRef = useRef();

  const options = [
    {label: STRINGS.pending, value: '0'},
    {label: STRINGS.completed, value: '1'},
  ];

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const animate = () => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    });
  };

  const onCreate = async (val, date, time) => {
    if (!val.length) {
      ToastAndroid.show(STRINGS.enterTitle, ToastAndroid.SHORT);
      return;
    }
    await dispatch(setVisible(false));
    const newRecord = {
      isChecked: false,
      title: val,
      date: STRINGS.expDate + date,
      time: STRINGS.expTime + time,
    };
    const newList = [newRecord, ...state[tab].list];
    animate();
    dispatch(setToDo({list: newList, showBtm: state[tab].showBtm}, tab));
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
    ToastAndroid.show(STRINGS.created, ToastAndroid.SHORT);
  };

  const onDelete = () => {
    const newList = state[tab].list.filter((item) => item.isChecked == false);
    animate();
    dispatch(setToDo({list: newList, showBtm: false}, tab));
    ToastAndroid.show(STRINGS.deleted, ToastAndroid.SHORT);
  };

  const onMarkCompleted = () => {
    let newPendingList = [],
      newCompletedRecords = [];
    const list = state[tab].list;
    for (let i = 0; i < list.length; i++) {
      if (list[i].isChecked)
        newCompletedRecords.push({
          title: list[i].title,
          isChecked: false,
          date: list[i].date,
          time: list[i].time,
        });
      else newPendingList.push(list[i]);
    }
    animate();
    dispatch(setToDo({list: newPendingList, showBtm: false}, tab));
    dispatch(
      setToDo(
        {
          list: [...state[1].list, ...newCompletedRecords],
          showBtm: state[1].showBtm,
        },
        '1',
      ),
    );
    ToastAndroid.show(STRINGS.mrkCompSuc, ToastAndroid.SHORT);
  };

  const onMarkPending = () => {
    const newCompletedList = [],
      newPendingRecords = [];
    const list = state[tab].list;
    for (let i = 0; i < list.length; i++) {
      if (list[i].isChecked)
        newPendingRecords.push({
          title: list[i].title,
          isChecked: false,
          date: list[i].date,
          time: list[i].time,
        });
      else newCompletedList.push(list[i]);
    }
    animate();
    dispatch(setToDo({list: newCompletedList, showBtm: false}, tab));
    dispatch(
      setToDo(
        {
          list: [...state[0].list, ...newPendingRecords],
          showBtm: state[0].showBtm,
        },
        '0',
      ),
    );
    ToastAndroid.show(STRINGS.mrkPendSuc, ToastAndroid.SHORT);
  };

  const setToggleCheckBox = (newValue, index) => {
    const newList = state[tab].list;
    newList[index].isChecked = newValue;
    let newShwBtm = false;
    if (newValue == true) newShwBtm = true;
    else
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].isChecked) {
          newShwBtm = true;
          break;
        }
      }
    animate();
    dispatch(setToDo({list: newList, showBtm: newShwBtm}, tab));
  };

  const onPageChange = (val) => {
    animate();
    dispatch(setTab(val));
  };

  return (
    <>
      <View style={{flex: 1}}>
        <Header />
        <SwitchSelector
          options={options}
          initial={0}
          style={{margin: Fonts.ten}}
          textStyle={{color: Colors.blue}}
          selectedTextStyle={{color: Colors.white}}
          buttonColor={Colors.blue}
          backgroundColor={Colors.white}
          borderWidth={1}
          hasPadding={true}
          borderColor={Colors.blue}
          valuePadding={1.5}
          onPress={onPageChange}
        />
        <FlatList
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          data={state[tab].list}
          contentContainerStyle={{flexGrow: 1}}
          ListEmptyComponent={<EmptyScreen />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ToDoCard
              index={index}
              setToggleCheckBox={setToggleCheckBox}
              item={item}
            />
          )}
        />
        {tab == 0 && (
          <TouchableOpacity
            onPress={() => dispatch(setVisible(true))}
            style={[styles.touch, {bottom: state[tab].showBtm ? 5 : 10}]}>
            <Icon name="plus" color={Colors.white} size={Fonts.thirty} />
          </TouchableOpacity>
        )}
      </View>
      {state[tab].showBtm && (
        <View style={styles.btm}>
          <ReusableButton
            title={tab == 0 ? STRINGS.mrkComp : STRINGS.mrkPend}
            onPress={tab == 0 ? onMarkCompleted : onMarkPending}
            iconName={tab == 0 ? 'check-circle' : 'file-edit'}
            style={styles.btn1}
          />
          {tab == 0 && (
            <ReusableButton
              title={STRINGS.delete}
              onPress={onDelete}
              iconName="delete"
              style={styles.btn2}
            />
          )}
        </View>
      )}
      <ToDoModal
        visible={visible}
        closeModal={() => dispatch(setVisible(false))}
        onPressSave={onCreate}
      />
    </>
  );
};

export default HomeScreen;
