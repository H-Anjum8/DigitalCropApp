import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import CustomButton from '../../../components/commonComponents/CustomButton';
import BASE_COLORS from '../../../utils/colors';
import { ICONS } from '../../../utils/appAssets';

const { width, height } = Dimensions.get('window');

const ResetPasswordSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Illustration */}
      <Image
        source={ICONS.TRUE}
        style={styles.illustration}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Your Password Has Been Reset Successfully
      </Text>

      <Text style={styles.description}>
        Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </Text>

      <CustomButton
        title="Confirm"
        onPress={() => navigation.navigate('login_screen')}
        buttonStyle={{ paddingHorizontal: moderateScale(125) }}
        textStyle={{ fontSize: moderateScale(14) }}
      />
    </View>
  );
};

export default ResetPasswordSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: 110,
  },
  illustration: {
    width: width * 0.18,
    height: height * 0.14,
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
    color: BASE_COLORS.TEXT_GREEN,
  },
  description: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: BASE_COLORS.TEXT_SECONDARY,
    marginBottom: 40,
  },
});
