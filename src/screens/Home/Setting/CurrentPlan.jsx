import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../components/commonComponents/BackButton';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BASE_COLORS from '../../../utils/colors';

const CurrentPlan = () => {
  const navigation = useNavigation();
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleCancelSubscription = () => {
    setShowCancelModal(true);
  };

  const confirmCancelSubscription = () => {
    setShowCancelModal(false);
    // Add your cancellation logic here
  };

  const handleChangePlan = () => {
    navigation.navigate('subscription');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <BackButton />

      <Text style={styles.title}>Subscription Plan</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Current Plan</Text>
        <View style={styles.cardHeader}>
          <Text style={styles.planName}>Quarterly</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Active</Text>
          </View>
        </View>
        <Text style={styles.planPrice}>
          <Text style={styles.priceValue}>$24.99</Text>
          <Text style={styles.priceLabel}> billed every month</Text>
        </Text>
        <Text style={styles.renewDate}>Renews on July 10ᵗʰ 2025</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleCancelSubscription}
        >
          <Text style={styles.cancelText}>Cancel Subscription</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.changeButton}
          onPress={handleChangePlan}
        >
          <Text style={styles.changeText}>Change Plan</Text>
        </TouchableOpacity>
      </View>

      {/* Cancel Subscription Modal */}
      <Modal
        transparent
        visible={showCancelModal}
        animationType="fade"
        onRequestClose={() => setShowCancelModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Are you sure you want to {'\n'}Cancel Subscription?
            </Text>
            <Text style={styles.modalDetail}>
              You’ll lose your current subscription & you will need to subscribe
              again to use your account.
            </Text>

            <View style={styles.optionRow}>
              <TouchableOpacity onPress={() => setShowCancelModal(false)}>
                <Text style={styles.cancelTextModal}>Cancel</Text>
              </TouchableOpacity>

              <View style={styles.separator} />

              <TouchableOpacity onPress={confirmCancelSubscription}>
                <Text style={styles.logoutText}>Cancel Subscription</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CurrentPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: BASE_COLORS.TEXT_GREEN,
    marginTop: verticalScale(62),
    marginBottom: verticalScale(20),
  },
  card: {
    backgroundColor: BASE_COLORS.PRIMARY_LIGHT,
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  cardLabel: {
    fontSize: 14,
    color: BASE_COLORS.BLACK,
    marginBottom: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planName: {
    fontSize: 22,
    fontWeight: '700',
    color: BASE_COLORS.TEXT_GREEN,
  },
  badge: {
    backgroundColor: '#CDE8C5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 13,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: BASE_COLORS.TEXT_GREEN,
  },
  planPrice: {
    fontSize: 14,
    marginTop: 4,
  },
  priceValue: {
    color: BASE_COLORS.TEXT_DARKGREEN,
    fontWeight: '600',
  },
  priceLabel: {
    color: BASE_COLORS.BLACK,
  },
  renewDate: {
    marginTop: 16,
    fontSize: 13,
    color: BASE_COLORS.BLACK,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: BASE_COLORS.TEXT_GREEN,
    borderRadius: 12,
    paddingVertical: 14,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: BASE_COLORS.TEXT_GREEN,
    fontWeight: '600',
    fontSize: 12,
  },
  changeButton: {
    flex: 1,
    backgroundColor: BASE_COLORS.TEXT_LIGHTGREEN,
    borderRadius: 12,
    paddingVertical: 14,
    marginLeft: 10,
    alignItems: 'center',
  },
  changeText: {
    color: BASE_COLORS.WHITE,
    fontWeight: '600',
    fontSize: 14,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: BASE_COLORS.WHITE,
    padding: moderateScale(20),
    borderRadius: moderateScale(12),
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: BASE_COLORS.TEXT_PRIMARY,
    marginBottom: verticalScale(10),
    textAlign: 'center',
  },
  modalDetail: {
    fontSize: moderateScale(10),
    fontWeight: '400',
    color: BASE_COLORS.TEXT_INPUT,
    marginBottom: verticalScale(20),
    textAlign: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(10),
    alignItems: 'center',
    width: '100%',
  },
  cancelTextModal: {
    fontSize: moderateScale(14),
    color: BASE_COLORS.TEXT_PRIMARY,
    fontWeight: '500',
  },
  logoutText: {
    fontSize: moderateScale(14),
    color: BASE_COLORS.TEXT_RED,
    fontWeight: '500',
  },
  separator: {
    width: 1,
    height: verticalScale(18),
    backgroundColor: BASE_COLORS.PRIMARY_DARK,
    marginHorizontal: moderateScale(15),
  },
});
