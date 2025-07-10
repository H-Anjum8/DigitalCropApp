import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  Text,
  Pressable,
} from 'react-native';
import COLORS from '../../utils/colors';

const CustomOTPInput = ({ length = 5, onOTPComplete, error }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every(d => d !== '')) {
      onOTPComplete(newOtp.join(''));
      Keyboard.dismiss();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRefs.current[index] = ref)}
          value={digit}
          onChangeText={value => handleChange(value, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          keyboardType="number-pad"
          maxLength={1}
          style={[styles.input, error ? styles.inputError : null]}
          textAlign="center"
        />
      ))}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
    borderRadius: 10,
    fontSize: 20,
    margin: 5,
    color: COLORS.BLACK,
  },
  inputError: {
    borderColor: COLORS.TEXT_RED,
  },
  errorText: {
    color: COLORS.TEXT_RED,
    marginTop: 8,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default CustomOTPInput;
