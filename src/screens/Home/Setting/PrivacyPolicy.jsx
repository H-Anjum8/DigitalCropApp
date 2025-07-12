import React from 'react';
import { ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BackButton from '../../../components/commonComponents/BackButton';
import BASE_COLORS from '../../../utils/colors';
const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Privacy & Policy</Text>

        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet consectetur. Egestas dignissim nulla
          pellentesque sit nibh. Veneratis nunc etiam libero ultricies accumsan
          sed lectus. At tortor accumsan at commodo non.
        </Text>

        <Text style={styles.sectionTitle}>2. Use of the Service</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet consectetur. Egestas dignissim nulla
          pellentesque sit nibh. Veneratis nunc etiam libero ultricies accumsan
          sed lectus. At tortor accumsan at commodo non.
        </Text>

        <Text style={styles.sectionTitle}>3. Privacy Policy</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet consectetur. Egestas dignissim nulla
          pellentesque sit nibh. Veneratis nunc etiam libero ultricies accumsan
          sed lectus. At tortor accumsan at commodo non.
        </Text>

        <Text style={styles.sectionTitle}>4. Termination</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet consectetur. Egestas dignissim nulla
          pellentesque sit nibh. Veneratis nunc etiam libero ultricies accumsan
          sed lectus. At tortor accumsan at commodo non.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
  },
  scrollContainer: {
    padding: moderateScale(24),
    paddingBottom: verticalScale(40),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '500',
    color: BASE_COLORS.TEXT_GREEN,
    marginTop: verticalScale(52),
    marginBottom: verticalScale(8),
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: BASE_COLORS.DARK_GRAY,
    marginBottom: verticalScale(10),
    marginTop: verticalScale(15),
  },
  sectionText: {
    fontSize: moderateScale(12),
    color: BASE_COLORS.DARK_GRAY,
    lineHeight: verticalScale(22),
    lineHeight: 16,
  },
});

export default PrivacyPolicy;
