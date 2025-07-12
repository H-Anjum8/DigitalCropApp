import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BASE_COLORS from '../../../utils/colors';
import CustomTextInput from '../../../components/commonComponents/CustomTextInput';
import BackButton from '../../../components/commonComponents/BackButton';
import CustomButton from '../../../components/commonComponents/CustomButton';
import { getValidationSchema } from '../../../utils/validationSchema';

export default function ChangePassword() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />

      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={getValidationSchema('change_password')}
        onSubmit={values => {
          console.log('Submitted:', values);
          navigation.goBack();
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <View style={styles.formContainer}>
            <Text style={styles.subtext}>Current Password</Text>
            <CustomTextInput
              placeholder="Enter Current Password"
              iconName="lock-closed-outline"
              secure
              value={values.currentPassword}
              onChangeText={handleChange('currentPassword')}
            />
            {errors.currentPassword && touched.currentPassword && (
              <Text style={styles.errorText}>{errors.currentPassword}</Text>
            )}

            <Text style={styles.subtext}>New Password</Text>
            <CustomTextInput
              placeholder="Enter New Password"
              iconName="lock-closed-outline"
              secure
              value={values.newPassword}
              onChangeText={handleChange('newPassword')}
            />
            {errors.newPassword && touched.newPassword && (
              <Text style={styles.errorText}>{errors.newPassword}</Text>
            )}

            <Text style={styles.subtext}>Confirm Password</Text>
            <CustomTextInput
              placeholder="Confirm New Password"
              iconName="lock-closed-outline"
              secure
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <CustomButton
              title="Save Changes"
              onPress={handleSubmit}
              buttonStyle={{
                paddingHorizontal: moderateScale(100),
                marginTop: verticalScale(14),
              }}
              textStyle={{ fontSize: moderateScale(14) }}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: BASE_COLORS.WHITE },
  formContainer: {
    marginTop: verticalScale(72),
  },
  subtext: {
    fontSize: 14,
    color: BASE_COLORS.BLACK,
    fontWeight: '500',
    marginBottom: verticalScale(5),
    marginTop: verticalScale(7),
  },
  errorText: {
    fontSize: 12,
    color: BASE_COLORS.TEXT_RED,
    marginBottom: verticalScale(1),
    marginTop: verticalScale(-4),
  },
});
