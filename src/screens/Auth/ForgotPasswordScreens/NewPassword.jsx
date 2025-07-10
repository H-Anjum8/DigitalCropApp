import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import CustomTextInput from '../../../components/commonComponents/CustomTextInput';
import CustomButton from '../../../components/commonComponents/CustomButton';
import BASE_COLORS from '../../../utils/colors';
import BackButton from '../../../components/commonComponents/BackButton';

// Yup Validation
const validationSchema = Yup.object({
  password: Yup.string().min(6, 'Too short!').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

export default function NewPassword() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Text style={styles.title}>New Password</Text>
      <Text style={styles.subtitle}>
        Your new password will be different from the existing & previous ones.
      </Text>

      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('Submitted:', values);
          navigation.navigate('reset_pass_success');
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
          <>
            <CustomTextInput
              placeholder="Create a password"
              iconName="lock-closed-outline"
              secure
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <CustomTextInput
              placeholder="Re-enter your password"
              iconName="lock-closed-outline"
              secure
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <CustomButton
              title="Confirm"
              onPress={handleSubmit}
              buttonStyle={[
                { paddingHorizontal: moderateScale(126), marginTop: 20 },
                !isValid && styles.buttonDisabled,
              ]}
              textStyle={{ fontSize: moderateScale(13) }}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 60,
    color: BASE_COLORS.TEXT_GREEN,
  },
  subtitle: {
    fontSize: 12,
    color: BASE_COLORS.TEXT_SECONDARY,
    marginBottom: 20,
    fontWeight: '400',
  },
  errorText: {
    color: BASE_COLORS.TEXT_RED,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 8,
    marginTop: -4,
  },

  buttonDisabled: {
    backgroundColor: BASE_COLORS.TEXT_LIGHTGREEN,
    marginTop: 5,
  },
});
