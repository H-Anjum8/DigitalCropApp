import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IMAGES } from '../utils/appAssets';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={IMAGES.SPLASH_SCREEN} // 🔁 Replace with your actual image path
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
    color: '#fff', // Adjust text color based on your image
    fontSize: 24,
    fontWeight: 'bold',
  },
});
