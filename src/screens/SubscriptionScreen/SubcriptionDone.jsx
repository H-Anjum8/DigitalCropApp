import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { ICONS } from '../../utils/appAssets';
import CustomButton from '../../components/commonComponents/CustomButton';
import BASE_COLORS from '../../utils/colors';

const SubcriptionDone = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);

    // Clean up timer on unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Center Icon */}
      <Image
        source={ICONS.TICK}
        style={styles.checkImage}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={styles.heading}>You’re All Set!</Text>

      {/* Subtext */}
      <Text style={styles.subText}>
        Welcome to SmartCropCare. Your{'\n'} account is now active.
      </Text>

      {/* Continue button */}
      <CustomButton
        title="Go to Home"
        onPress={() => navigation.navigate('dashboard')}
        buttonStyle={{ paddingHorizontal: moderateScale(110) }}
        textStyle={{ fontSize: moderateScale(12) }}
      />
    </View>
  );
};

export default SubcriptionDone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
    padding: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  checkImage: {
    width: moderateScale(120),
    height: moderateScale(110),
    marginBottom: verticalScale(12),
    marginTop: verticalScale(168),
  },
  heading: {
    fontSize: 24,
    fontWeight: 600,
    fontFamily: 'Poppins_600SemiBold',
    color: BASE_COLORS.TEXT_GREEN,
    marginBottom: verticalScale(4),
  },
  subText: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    color: BASE_COLORS.TEXT_INPUT_FIELD,
    marginBottom: verticalScale(220),
    paddingHorizontal: moderateScale(18),
  },
});
