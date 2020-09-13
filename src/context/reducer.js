import {TYPE} from '../utils/constants';

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.setToDoList:
      return {...state, [action.tab]: action.payload};
    case TYPE.setTab:
      return {...state, tab: action.payload};
    case TYPE.setVisible:
      return {...state, visible: action.payload};
    default:
      return state;
  }
};

export default reducer;
