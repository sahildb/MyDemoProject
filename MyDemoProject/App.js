import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Card from './src/Card';
import Card2 from './src/Card2';
import ScreenOne from './src/ScreenOne';
import Progress from './src/Progress';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScreenOne />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
