import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BackButton from '../../components/commonComponents/BackButton';
import CustomTextInput from '../../components/commonComponents/CustomTextInput';
import CustomButton from '../../components/commonComponents/CustomButton';
import BASE_COLORS from '../../utils/colors';
import { getValidationSchema } from '../../utils/validationSchema';

const Signup = () => {
  const navigation = useNavigation();
  const [agreeTerms, setAgreeTerms] = useState(false);

  const openTerms = () => {
    Linking.openURL('https://yourapp.com/terms');
  };

  const openPrivacy = () => {
    Linking.openURL('https://yourapp.com/privacy');
  };

  return (
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.heading}>Create Your Account</Text>
      <Text style={styles.subheading}>
        Start your journey toward smarter crop protection.
      </Text>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={getValidationSchema('signup')}
        onSubmit={values => {
          if (!agreeTerms) return;
          console.log('Signing up with:', values);
          navigation.navigate('signup_otp_verify');
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <CustomTextInput
              placeholder="Enter Your Full Name"
              iconName="person-outline"
              value={values.fullName}
              onChangeText={handleChange('fullName')}
            />
            {touched.fullName && errors.fullName && (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            )}

            <CustomTextInput
              placeholder="Enter Your Email Address"
              iconName="mail-outline"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <CustomTextInput
              placeholder="Phone Number"
              iconName="call-outline"
              value={values.phone}
              onChangeText={handleChange('phone')}
              keyboardType="phone-pad"
            />
            {touched.phone && errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}

            <CustomTextInput
              placeholder="Create Password"
              iconName="lock-closed-outline"
              secure
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <CustomTextInput
              placeholder="Confirm Password"
              iconName="lock-closed-outline"
              secure
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            {/* Checkbox Row */}
            <View style={styles.checkboxRow}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  {
                    backgroundColor: agreeTerms ? BASE_COLORS.PRIMARY : '#fff',
                  },
                ]}
                onPress={() => setAgreeTerms(!agreeTerms)}
              >
                {agreeTerms && (
                  <Ionicons
                    name="checkmark"
                    size={moderateScale(14)}
                    color="#fff"
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.termsText}>
                By signing up, you agree to the{' '}
                <Text style={styles.linkText} onPress={openTerms}>
                  Terms of Service
                </Text>{' '}
                and{' '}
                <Text style={styles.linkText} onPress={openPrivacy}>
                  Privacy Policy
                </Text>
              </Text>
            </View>

            <CustomButton
              title="Sign Up"
              onPress={handleSubmit}
              disabled={!agreeTerms}
              buttonStyle={{
                paddingHorizontal: moderateScale(128),
                marginTop: 20,
              }}
              textStyle={{ fontSize: moderateScale(14) }}
            />
          </>
        )}
      </Formik>

      <Text style={styles.footerText}>
        Already have an account?
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('login_screen')}
        >
          {' '}
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
    padding: 22,
  },
  heading: {
    fontSize: 26,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 5,
    fontWeight: '600',
    marginTop: 60,
    color: BASE_COLORS.TEXT_GREEN,
  },
  subheading: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins_400Regular',
    marginBottom: 30,
    color: BASE_COLORS.TEXT_SECONDARY,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '400',
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: BASE_COLORS.TEXT_TERNARY,
  },
  signupText: {
    color: BASE_COLORS.TEXT_DARKGREEN,
    fontFamily: 'Poppins_600SemiBold',
  },
  errorText: {
    color: BASE_COLORS.TEXT_RED,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 5,
    marginTop: -4,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(16),
  },
  checkbox: {
    width: moderateScale(17),
    height: moderateScale(17),
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: BASE_COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 15,
  },
  termsText: {
    flex: 1,
    fontSize: moderateScale(12),
    fontFamily: 'Poppins_400Regular',
    color: BASE_COLORS.TEXT_SECONDARY,
    marginBottom: 16,
  },
  linkText: {
    color: BASE_COLORS.PRIMARY,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default Signup;
