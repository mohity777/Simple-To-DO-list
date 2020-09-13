import React, {createContext, useReducer} from 'react';
import reducer from './reducer';

const initialState = {
  0: {
    showBtm: false,
    list: [],
  },
  1: {
    showBtm: false,
    list: [],
  },
  tab: '0',
  visible: false,
};

const GlobalContext = createContext(initialState);

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, StateProvider};
