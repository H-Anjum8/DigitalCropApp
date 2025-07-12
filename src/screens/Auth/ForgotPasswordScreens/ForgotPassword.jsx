import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../components/commonComponents/BackButton';
import CustomTextInput from '../../../components/commonComponents/CustomTextInput';
import CustomButton from '../../../components/commonComponents/CustomButton';
import BASE_COLORS from '../../../utils/colors';
import { getValidationSchema } from '../../../utils/validationSchema';

const ForgotPassword = () => {
  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.header}>Forgot Password</Text>
      <Text style={styles.subHeader}>
        Enter the email associated with your account and we’ll send an email
        with a code to reset your password.
      </Text>

      <Formik
        initialValues={{ email: '' }}
        validationSchema={getValidationSchema('emailUpdate')}
        onSubmit={values => {
          console.log('Form Data:', values);
          Navigation.navigate('verify_otp');
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <View style={styles.formContainer}>
              <CustomTextInput
                placeholder="Enter Your Email"
                iconName="mail-outline"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            {/* ✅ Button triggers handleSubmit now */}
            <CustomButton
              title="Confirm"
              onPress={handleSubmit}
              buttonStyle={{ paddingHorizontal: moderateScale(129) }}
              textStyle={{ fontSize: moderateScale(14) }}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: 500,
    color: BASE_COLORS.TEXT_GREEN,
    marginBottom: 10,
    marginTop: 60,
  },
  subHeader: {
    fontSize: 12,
    color: BASE_COLORS.TEXT_SECONDARY,
    marginBottom: 20,
    fontWeight: '400',
    marginTop: -4,
  },
  formContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  errorText: {
    color: BASE_COLORS.TEXT_RED,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginTop: -4,
  },
});

export default ForgotPassword;
