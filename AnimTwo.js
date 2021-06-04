import React, {useEffect, useState, useRef} from 'react';
import {Animated, Button, LogBox, StyleSheet, Text, View} from 'react-native';

const AnimTwo = () => {
  const redSquare = useRef(new Animated.Value(1)).current;
  const greenSquare = useRef(new Animated.ValueXY(0, 0)).current;
  const blueSquare = useRef(new Animated.ValueXY(0, 0)).current;

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  const runAnimation = () => {
    if (flag) {
      Animated.sequence([
        Animated.timing(redSquare, {toValue: 0}),
        Animated.parallel([
          Animated.spring(greenSquare, {toValue: {x: 200, y: 0}}),
          Animated.spring(blueSquare, {toValue: {x: 200, y: 400}}),
        ]),
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(redSquare, {toValue: 1}),
        Animated.parallel([
          Animated.spring(greenSquare, {toValue: {x: 0, y: 200}}),
          Animated.spring(blueSquare, {toValue: {x: 400, y: 200}}),
        ]),
      ]).start();
    }
    setFlag(prev => !prev);
  };

  return (
    <View style={{flex: 1}}>
      <Animated.View style={{opacity: redSquare}}>
        <View style={styles.redSquare}>
          <Text>1</Text>
        </View>
      </Animated.View>

      <Animated.View style={greenSquare.getLayout()}>
        <View style={styles.greenSquare}>
          <Text>2</Text>
        </View>
      </Animated.View>

      <Animated.View style={blueSquare.getLayout()}>
        <View style={styles.blueSquare}>
          <Text>3</Text>
        </View>
      </Animated.View>

      <Button title="Animation Start" onPress={runAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  redSquare: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  greenSquare: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  blueSquare: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimTwo;
