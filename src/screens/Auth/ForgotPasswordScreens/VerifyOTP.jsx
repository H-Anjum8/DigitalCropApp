import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BackButton from '../../../components/commonComponents/BackButton';
import CustomOTPInput from '../../../components/commonComponents/CustomOTPInput';
import CustomButton from '../../../components/commonComponents/CustomButton';
import BASE_COLORS from '../../../utils/colors';

const { height } = Dimensions.get('window');

const validationSchema = Yup.object().shape({
  otp: Yup.string().length(5, 'Enter 5 digit code').required('OTP is required'),
});

const VerifyOTP = () => {
  const navigation = useNavigation();
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    startCountdown();
    return () => clearInterval(timerRef.current);
  }, []);

  const startCountdown = () => {
    setCanResend(false);
    setCountdown(60);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResend = () => {
    if (canResend) {
      console.log('Resending code...');
      startCountdown();
    }
  };

  const handleSubmit = values => {
    console.log('OTP:', values.otp);
    // navigation.navigate('new_password');
  };

  return (
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.heading}>Verify OTP</Text>
      <Text style={styles.subheading}>
        Enter your OTP which has been sent to your email and completely verify
        your account.
      </Text>

      <Formik
        initialValues={{ otp: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, values, errors, touched, setFieldValue }) => (
          <>
            <CustomOTPInput
              length={5}
              onOTPComplete={otp => setFieldValue('otp', otp)}
              error={touched.otp && errors.otp}
            />

            <Text style={styles.resendText}>
              A code has been sent to your email
            </Text>

            <CustomButton
              title="Confirm"
              onPress={() => navigation.navigate('new_password')}
              buttonStyle={{ paddingHorizontal: moderateScale(125) }}
              textStyle={{ fontSize: moderateScale(14) }}
            />

            {canResend ? (
              <TouchableOpacity onPress={handleResend}>
                <Text style={styles.resendActive}>Re-send Code</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.timerText}>
                Re-send code in 00:{countdown < 10 ? '0' : ''}
                {countdown}
              </Text>
            )}
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: BASE_COLORS.TEXT_GREEN,
    marginBottom: height * 0.014,
    marginTop: 60,
  },
  subheading: {
    fontSize: 14,
    fontWeight: '400',
    color: BASE_COLORS.TEXT_SECONDARY,
    marginBottom: height * 0.04,
  },
  resendText: {
    fontSize: 14,
    fontWeight: '400',
    color: BASE_COLORS.TEXT_SECONDARY,
    marginTop: 2,
    textAlign: 'center',
    marginBottom: height * 0.045,
  },
  timerText: {
    textAlign: 'center',
    color: BASE_COLORS.TEXT_SECONDARY,
    marginTop: 16,
    fontSize: 13,
  },
  resendActive: {
    textAlign: 'center',
    color: '#2E7D32',
    fontSize: 13,
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});

export default VerifyOTP;
