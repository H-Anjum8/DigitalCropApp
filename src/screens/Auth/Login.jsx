import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../utils/colors';
import BackButton from '../../components/commonComponents/BackButton';
import CustomTextInput from '../../components/commonComponents/CustomTextInput';
import CustomButton from '../../components/commonComponents/CustomButton';
import { getValidationSchema } from '../../utils/validationSchema';

const Login = () => {
  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.heading}>Welcome Back!</Text>
      <Text style={styles.subheading}>
        Log in to get instant crop protection guidance.
      </Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={getValidationSchema('login')}
        onSubmit={values => {
          console.log('Logging in with:', values);
          Navigation.navigate('dashboard');
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <CustomTextInput
              placeholder="Phone Number or Email"
              iconName="mail-outline"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <CustomTextInput
              placeholder="Enter Your Password"
              iconName="lock-closed-outline"
              secure
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity style={styles.forgotButton}>
              <Text
                style={styles.forgotText}
                onPress={() => Navigation.navigate('forgot_password')}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <CustomButton
              title="Login"
              onPress={handleSubmit}
              buttonStyle={{ paddingHorizontal: moderateScale(129) }}
              textStyle={{ fontSize: moderateScale(14) }}
            />
          </>
        )}
      </Formik>

      <View style={styles.signupContainer}>
        <Text style={styles.footerText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => Navigation.navigate('signup')}>
          <Text style={styles.signupText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
  heading: {
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    marginTop: 60,
    marginBottom: 5,
    fontWeight: '600',
    color: COLORS.TEXT_GREEN,
  },
  subheading: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins_400Regular',
    marginBottom: 30,
    color: COLORS.TEXT_SECONDARY,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: COLORS.TEXT_DARKGREEN,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: COLORS.TEXT_TERNARY,
  },
  signupText: {
    color: COLORS.TEXT_DARKGREEN,
    fontFamily: 'Poppins_600SemiBold',
  },
  errorText: {
    color: COLORS.TEXT_RED,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 12,
    marginTop: -4,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Login;
