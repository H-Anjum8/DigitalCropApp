import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/commonComponents/BackButton';
import CustomButton from '../../components/commonComponents/CustomButton';
import BASE_COLORS from '../../utils/colors';
import { getValidationSchema } from '../../utils/validationSchema';

const SignupOTPVerify = () => {
  const navigation = useNavigation();
  const inputs = useRef([]);

  const handleChangeDigit = (text, index, values, setFieldValue) => {
    if (text.length > 1) return;

    const updatedOtp = [...values.otp];
    updatedOtp[index] = text;
    setFieldValue('otp', updatedOtp);

    if (text !== '' && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const handleSubmit = values => {
    const finalCode = values.otp.join('');
    console.log('Entered Code:', finalCode);
    navigation.navigate('upload_profile_image');
  };

  return (
    <Formik
      initialValues={{ otp: ['', '', '', '', ''] }}
      validationSchema={getValidationSchema('signup_verify_otp')}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleSubmit, setFieldValue }) => (
        <View style={styles.container}>
          <BackButton />

          <Text style={styles.heading}>Phone Verification</Text>
          <Text style={styles.subheading}>
            Enter your OTP which has been sent to your Phone and completely
            verify your account.
          </Text>

          {/* 5 Digit Code Boxes */}
          <View style={styles.codeContainer}>
            {values.otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={el => (inputs.current[index] = el)}
                style={styles.codeInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={text =>
                  handleChangeDigit(text, index, values, setFieldValue)
                }
              />
            ))}
          </View>

          {errors.otp && touched.otp && (
            <Text style={styles.errorText}>{errors.otp}</Text>
          )}

          <Text style={styles.phoneMessage}>
            A code has been sent to your Phone{' '}
            <Text style={styles.phoneNumber}>(111 111-1111)</Text>
          </Text>

          <CustomButton
            title="Confirm"
            onPress={handleSubmit}
            buttonStyle={{
              marginTop: verticalScale(40),
              paddingHorizontal: moderateScale(120),
            }}
            textStyle={{ fontSize: moderateScale(14) }}
          />

          <TouchableOpacity onPress={() => console.log('Resend code')}>
            <Text style={styles.resendText}>
              Didn't get the code? <Text style={styles.resendLink}>Resend</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default SignupOTPVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
    padding: 22,
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
    fontFamily: 'Poppins_600SemiBold',
    color: BASE_COLORS.TEXT_GREEN,
    marginTop: verticalScale(60),
    marginBottom: verticalScale(5),
  },
  subheading: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Poppins_400Regular',
    color: BASE_COLORS.TEXT_SECONDARY,
    marginBottom: verticalScale(30),
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(10),
  },
  codeInput: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderWidth: 1.5,
    borderColor: BASE_COLORS.LIGHT_GRAY,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: BASE_COLORS.TEXT_DARK,
    fontFamily: 'Poppins_600SemiBold',
  },
  phoneMessage: {
    textAlign: 'center',
    marginTop: verticalScale(20),
    fontSize: moderateScale(10),
    color: BASE_COLORS.TEXT_SECONDARY,
    fontFamily: 'Poppins_400Regular',
  },
  phoneNumber: {
    color: BASE_COLORS.PRIMARY,
    fontFamily: 'Poppins_600SemiBold',
  },
  resendText: {
    textAlign: 'center',
    marginTop: verticalScale(25),
    fontSize: moderateScale(12),
    color: BASE_COLORS.TEXT_SECONDARY,
    fontFamily: 'Poppins_400Regular',
  },
  resendLink: {
    color: BASE_COLORS.PRIMARY,
    fontFamily: 'Poppins_600SemiBold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: verticalScale(10),
    fontSize: moderateScale(12),
    fontFamily: 'Poppins_400Regular',
  },
});
