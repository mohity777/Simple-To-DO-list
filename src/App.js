import React from 'react';
import {StateProvider} from './context/store';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <StateProvider>
      <HomeScreen />
    </StateProvider>
  );
};

export default App;
