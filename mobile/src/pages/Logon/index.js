import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, Animated } from 'react-native';

import logoImg from '../../assets/loga.png';

import styles from './styles';

export default function App() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 30,
    }).start();
  }, [offset.y]);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerlogo}>
        <Image source={logoImg} />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            transform: [{translateY: offset.y}],
          },
        ]}>
        <TextInput
          style={styles.input}
          placeholder="                    matrícula You"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="                          senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity
        style={styles.btnSubmit}
        >
          <Text style={styles.submitText}>acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>criar conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}