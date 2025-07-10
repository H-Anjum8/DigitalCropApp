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
// or 'react-native-vector-icons/Ionicons'

const plans = [
  { title: 'Monthly', price: '$9.99', discount: '' },
  { title: 'Quarterly', price: '$24.99', discount: 'Save 15%' },
  { title: 'Biannual', price: '$47.99', discount: 'Save 20%' },
  { title: 'Annual', price: '$89.99', discount: 'Save 25%' },
];

export default function SubscriptionScreen() {
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
          <Text style={styles.planPrice}>{plan.price}</Text>
        </View>
        {plan.discount ? (
          <Text style={styles.discount}>{plan.discount}</Text>
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Choose Your Plan</Text>
        <Text style={styles.subtitle}>
          Unlock powerful AI tools and expert support with a flexible
          subscription.
        </Text>

        {plans.map(renderPlan)}

        <View style={styles.benefits}>
          <Text style={styles.benefit}>✔ AI-Powered Crop Recommendations</Text>
          <Text style={styles.benefit}>
            ✔ Instant Access to 2025 Crop Guide
          </Text>
          <Text style={styles.benefit}>
            ✔ Access to Premium Support (with upgrade)
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue To Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
  },
  subtitle: {
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
  },
  planContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  planSelected: {
    borderColor: '#3AA655',
    backgroundColor: '#E8F5E9',
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
    color: '#555',
  },
  discount: {
    fontSize: 13,
    color: '#3AA655',
    fontWeight: 'bold',
  },
  benefits: {
    marginTop: 20,
    marginBottom: 30,
  },
  benefit: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
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
