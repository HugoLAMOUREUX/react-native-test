import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native';
import Routes from './src/routes';
import Home from './src/screens/Home';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
  );
}

export default App;
