import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/commonComponents/BackButton';
import BASE_COLORS from '../../utils/colors';
import CustomButton from '../../components/commonComponents/CustomButton';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { plans } from '../../utils/staticData';
// or 'react-native-vector-icons/Ionicons'

export default function SubscriptionScreen() {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState('Quarterly');

  const renderPlan = plan => {
    const isSelected = selectedPlan === plan.title;

    return (
      <TouchableOpacity
        key={plan.title}
        style={[styles.planContainer, isSelected && styles.planSelected]}
        onPress={() => setSelectedPlan(plan.title)}
        activeOpacity={0.8}
      >
        <View style={styles.radioCircle}>
          {isSelected && (
            <Ionicons name="checkmark-circle" size={24} color="#3AA655" />
          )}
        </View>
        <View style={styles.planTextContainer}>
          <Text style={styles.planTitle}>{plan.title}</Text>
        </View>
        <View>
          <Text style={styles.planPrice}>{plan.price}</Text>
          {plan.discount ? (
            <Text style={styles.discount}>{plan.discount}</Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <BackButton />

        <Text style={styles.title}>Choose Your Plan</Text>
        <Text style={styles.subtitle}>
          Unlock powerful AI tools and expert support {'\n'} with a flexible
          subscription.
        </Text>

        {plans.map(renderPlan)}

        <View style={styles.benefits}>
          <Text style={styles.benefit}>
            <Text style={{ color: 'green' }}>{'\u2714'} </Text>AI-Powered Crop
            Recommendations
          </Text>
          <Text style={styles.benefit}>
            <Text style={{ color: 'green' }}>{'\u2714'} </Text>Instant Access to
            2025 Crop Guide
          </Text>
          <Text style={styles.benefit}>
            <Text style={{ color: 'green' }}>{'\u2714'} </Text>Access to Premium
            Support
          </Text>
        </View>

        <CustomButton
          title="Continue To Payment"
          onPress={() => navigation.navigate('payment', { plan: selectedPlan })}
          buttonStyle={{
            paddingHorizontal: moderateScale(70),
            marginBottom: 20,
          }}
          textStyle={{ fontSize: moderateScale(14) }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 60,
    color: BASE_COLORS.TEXT_GREEN,
  },
  subtitle: {
    color: '#666',
    fontSize: 12,
    marginBottom: 30,
  },
  planContainer: {
    borderWidth: 2,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
    borderRadius: 20,
    padding: 14,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  planSelected: {
    borderColor: BASE_COLORS.PRIMARY,
    backgroundColor: BASE_COLORS.PRIMARY_LIGHT,
  },
  radioCircle: {
    width: 30,
    height: 30,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  planTextContainer: {
    flex: 1,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  planPrice: {
    fontSize: 14,

    color: BASE_COLORS.TEXT_GREEN,
  },
  discount: {
    alignSelf: 'flex-end',
    fontSize: 10,
    color: BASE_COLORS.TEXT_DARKGREEN,
    fontWeight: '500',
  },
  benefits: {
    marginTop: 20,
    marginBottom: 90,
  },
  benefit: {
    fontSize: 12,
    marginBottom: 8,
    color: BASE_COLORS.GRAY,
  },
  button: {
    backgroundColor: '#3AA655',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
