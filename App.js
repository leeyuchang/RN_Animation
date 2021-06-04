import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import DraggableView from './DraggableView';
// import Opacity from './Opacity';
import AnimTwo from './AnimTwo';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <DraggableView /> */}
      {/* <Opacity /> */}
      <AnimTwo />
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
