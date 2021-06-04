import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DraggableView from './DraggableView';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DraggableView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default App;
