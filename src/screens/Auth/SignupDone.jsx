import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BASE_COLORS from '../../utils/colors';
import CustomButton from '../../components/commonComponents/CustomButton';
import { ICONS } from '../../utils/appAssets';

const SignupDone = () => {
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
      <Text style={styles.heading}>Congratulations</Text>

      {/* Subtext */}
      <Text style={styles.subText}>
        Your account is ready to use. You will be redirected {'\n'} to the Home
        Page in a few seconds.
      </Text>

      {/* Continue button */}
      <CustomButton
        title="Continue"
        onPress={() => navigation.navigate('subscription')}
        buttonStyle={{ paddingHorizontal: moderateScale(122) }}
        textStyle={{ fontSize: moderateScale(14) }}
      />
    </View>
  );
};

export default SignupDone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
    padding: 22,
    alignItems: 'center',
    marginBottom: 80,
    justifyContent: 'center',
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
    color: BASE_COLORS.BLACK,
    marginBottom: verticalScale(4),
  },
  subText: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    color: BASE_COLORS.TEXT_INPUT_FIELD,
    marginBottom: verticalScale(220),
    paddingHorizontal: moderateScale(18),
  },
});
