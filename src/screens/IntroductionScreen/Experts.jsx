import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../utils/colors';
import appAssets from '../../utils/appAssets';
import CustomButton from '../../components/commonComponents/CustomButton';
import BackButton from '../../components/commonComponents/BackButton';

const { width, height } = Dimensions.get('window');

const Experts = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('login_screen');
  };

  return (
    <View style={styles.container}>
      <BackButton />

      {/* Top Illustration */}
      <Image
        source={appAssets.IMAGES.VERIFIED}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Pagination */}
      <View style={styles.pagination}>
        <View style={styles.inactiveDot} />
        <View style={styles.inactiveDot} />
        <View style={styles.activeDot} />
      </View>

      {/* Center Text */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Talk to Real Experts</Text>
        <Text style={styles.subtext}>
          Need personalized advice? Unlock direct {'\n'} messaging with
          certified agri-chemical {'\n'}professionals.
        </Text>
      </View>

      {/* Buttons */}

      <CustomButton
        title="Get Started"
        onPress={handleNext}
        buttonStyle={{ paddingHorizontal: moderateScale(124) }}
        textStyle={{ fontSize: moderateScale(14) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(40),
  },
  illustration: {
    width: width * 0.8,
    height: height * 0.59,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
  },
  heading: {
    color: COLORS.TEXT_GREEN,
    fontSize: moderateScale(24),
    fontWeight: '500',
    textAlign: 'center',
    marginTop: verticalScale(-30),
    marginBottom: verticalScale(8),
  },
  subtext: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: moderateScale(13),
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: moderateScale(18),
    marginBottom: verticalScale(20),
    paddingHorizontal: moderateScale(10),
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(-68),
    marginBottom: verticalScale(8),
    gap: moderateScale(6),
  },
  activeDot: {
    width: moderateScale(32),
    height: moderateScale(6),
    borderRadius: moderateScale(3),
    backgroundColor: COLORS.PRIMARY,
  },
  inactiveDot: {
    width: moderateScale(12),
    height: moderateScale(6),
    borderRadius: moderateScale(3),
    backgroundColor: COLORS.PRIMARY_LIGHT,
    opacity: 0.9,
  },
});

export default Experts;
