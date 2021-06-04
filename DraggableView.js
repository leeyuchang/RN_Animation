import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {LogBox} from 'react-native';

const DraggableView = () => {
  const mySquare = useRef(new Animated.ValueXY(0, 0)).current;

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  useEffect(() => {
    Animated.spring(mySquare, {
      toValue: {x: 150, y: 350},
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={mySquare.getLayout()}>
      <View style={styles.square}>
        <Text>Hello</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#61dafb',
    width: 100,
    height: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DraggableView;
