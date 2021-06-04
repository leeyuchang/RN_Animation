import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View, Easing, Button} from 'react-native';
import {LogBox} from 'react-native';

const DraggableView = () => {
  // const mySquare = useRef(new Animated.ValueXY(0, 0)).current;
  const [mySquare] = useState(new Animated.ValueXY(0, 0));
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  const runAnimation = () => {
    if (flag) {
      Animated.timing(mySquare, {
        toValue: {x: 0, y: 0},
        duration: 2000,
        easing: Easing.bounce,
      }).start();
    } else {
      Animated.timing(mySquare, {
        toValue: {x: 150, y: 350},
        duration: 2000,
        easing: Easing.bounce,
      }).start();
    }
    setFlag(prev => !prev);
  };

  return (
    <View style={{flex: 1}}>
      <Animated.View style={mySquare.getLayout()}>
        <View style={styles.square}>
          <Text>Hello</Text>
        </View>
      </Animated.View>
      <Button title="Animation Start" onPress={runAnimation} />
    </View>
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
