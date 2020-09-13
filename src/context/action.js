import {TYPE} from '../utils/constants';

export const setToDo = (payload, tab) => ({
  type: TYPE.setToDoList,
  payload,
  tab,
});

export const setTab = (payload) => ({
  type: TYPE.setTab,
  payload,
});

export const setVisible = (payload) => ({
  type: TYPE.setVisible,
  payload,
});
