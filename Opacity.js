import React, {useEffect, useState} from 'react';
import {Animated, Button, LogBox, StyleSheet, Text, View} from 'react-native';

const Opacity = () => {
  // const mySquare = useRef(new Animated.ValueXY(0, 0)).current;
  const [mySquare] = useState(new Animated.Value(1));
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  const runAnimation = () => {
    if (flag) {
      Animated.timing(mySquare, {
        toValue: 0,
        duration: 500,
      }).start();
    } else {
      Animated.timing(mySquare, {
        toValue: 1,
        duration: 500,
      }).start();
    }
    setFlag(prev => !prev);
  };

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          opacity: mySquare,
          transform: [
            {
              rotateX: mySquare.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '180deg', '360deg'],
              }),
            },
            {
              translateX: mySquare.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [300, 150, 0],
              }),
            },
          ],
          // top: mySquare.interpolate({
          //   inputRange: [0, 1],
          //   outputRange: [700, 0],
          // }),
        }}>
        {/* // style={mySquare.getLayout()} */}
        <View style={styles.square}>
          <Text>Hello</Text>
        </View>
      </Animated.View>
      <Animated.Text
        style={{
          fontSize: mySquare.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [40, 30, 20],
          }),
          color: mySquare.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['red', 'green', 'blue'],
          }),
        }}>
        <Text>Animation Effects</Text>
      </Animated.Text>
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

export default Opacity;
