import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import BASE_COLORS from '../../../utils/colors';
import BackButton from '../../../components/commonComponents/BackButton';
import CustomTextInput from '../../../components/commonComponents/CustomTextInput';
import CustomButton from '../../../components/commonComponents/CustomButton';
import { getValidationSchema } from '../../../utils/validationSchema';

export default function EditProfile() {
  const navigation = useNavigation();

  const initialValues = {
    fullName: 'Mac Collins',
    email: 'maccollins@gmail.com',
    phone: '111-111-1111',
  };

  const handleSubmit = values => {
    console.log('Updated Info:', values);
    navigation.navigate('setting'); // or show a success toast/message
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema('edit_profile')}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.heading}>Edit Profile</Text>

              <Text style={styles.label}>Full Name</Text>
              <CustomTextInput
                placeholder="Full Name"
                iconName="person-outline"
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                inputStyle={styles.input}
              />
              {touched.fullName && errors.fullName && (
                <Text style={styles.error}>{errors.fullName}</Text>
              )}

              <Text style={styles.label}>Email Address</Text>
              <CustomTextInput
                placeholder="Email"
                iconName="mail-outline"
                keyboardType="email-address"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <Text style={styles.label}>Phone Number</Text>
              <CustomTextInput
                placeholder="Phone Number"
                iconName="call-outline"
                keyboardType="phone-pad"
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
              />
              {touched.phone && errors.phone && (
                <Text style={styles.error}>{errors.phone}</Text>
              )}

              <CustomButton
                title="Save Changes"
                onPress={handleSubmit}
                buttonStyle={{
                  marginTop: verticalScale(40),
                  paddingHorizontal: moderateScale(110),
                }}
                textStyle={{ fontSize: moderateScale(12) }}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
    padding: moderateScale(22),
  },
  heading: {
    fontSize: moderateScale(25),
    color: BASE_COLORS.TEXT_GREEN,
    fontWeight: '500',
    marginTop: verticalScale(55),
    marginBottom: verticalScale(16),
  },
  label: {
    fontSize: moderateScale(14),
    color: BASE_COLORS.DARK_GRAY,
    fontWeight: '500',
    marginBottom: verticalScale(6),
    marginTop: verticalScale(6),
  },
  input: {
    color: BASE_COLORS.ONLINE,
  },
  error: {
    color: 'red',
    fontSize: moderateScale(12),
    marginBottom: verticalScale(5),
    marginLeft: moderateScale(4),
  },
});
