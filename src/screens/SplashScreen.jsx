import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IMAGES } from '../utils/appAssets';
import BASE_COLORS from '../utils/colors';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={IMAGES.SPLASH_SCREEN}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}></View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Optional: backgroundColor: 'rgba(0,0,0,0.3)' to darken image
  },
  text: {
    color: BASE_COLORS.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
