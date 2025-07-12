import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../../components/commonComponents/CustomButton';
import appAssets from '../../../utils/appAssets';
import BASE_COLORS from '../../../utils/colors';

const Setting = () => {
  const navigation = useNavigation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    {
      title: 'Personal Information',
      icon: 'person-outline',
      nav_link: 'personal_information',
    },
    {
      title: 'Subscription Plan',
      icon: 'card-outline',
      nav_link: 'current_plan',
    },
    {
      title: 'Change Password',
      icon: 'lock-closed-outline',
      nav_link: 'change_password',
    },
    {
      title: 'Privacy Policy',
      icon: 'document-text-outline',
      nav_link: 'privacy_policy',
    },
    {
      title: 'Terms & Conditions',
      icon: 'document-text-outline',
      nav_link: 'terms_and_conditions',
    },
  ];

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    navigation.navigate('login_screen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image
              source={appAssets.IMAGES.PROFILE}
              style={styles.profileImage}
            />
            <TouchableOpacity
              style={styles.editProfileIconButton}
              onPress={() => navigation.navigate('upload_profile_image')}
              activeOpacity={0.7}
            >
              <Ionicons
                name="create-outline"
                size={moderateScale(16)}
                color={BASE_COLORS.WHITE}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>Mac Collins</Text>
          <Text style={styles.userEmail}>maccollins@gmail.com</Text>

          <CustomButton
            title="Edit Profile"
            onPress={() => navigation.navigate('edit_profile')}
            iconName="create-outline"
            iconSize={moderateScale(13)}
            buttonStyle={{
              marginTop: verticalScale(6),
              paddingHorizontal: moderateScale(2),
              borderRadius: 12,
              paddingVertical: verticalScale(8),
            }}
            textStyle={{ fontSize: moderateScale(12) }}
          />
        </View>

        {/* Menu */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.nav_link)}
            >
              <Ionicons
                name={item.icon}
                size={moderateScale(20)}
                color={BASE_COLORS.TEXT_PRIMARY}
                style={styles.icon}
              />
              <Text style={styles.menuItemText}>{item.title}</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={moderateScale(16)}
                color={BASE_COLORS.PRIMARY}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <CustomButton
          title="Log Out"
          onPress={() => setShowLogoutModal(true)}
          iconName="log-out-outline"
          iconSize={moderateScale(16)}
          buttonStyle={{
            marginTop: verticalScale(40),
            paddingHorizontal: moderateScale(125),
          }}
          textStyle={{ fontSize: moderateScale(14) }}
        />
      </ScrollView>

      {/* Logout Confirmation Modal */}
      <Modal
        transparent
        visible={showLogoutModal}
        animationType="fade"
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Are you sure you want to log out?
            </Text>
            <Text style={styles.modaldetail}>
              You’ll need to log in again to access your account and saved data.
            </Text>
            <View style={styles.optionRow}>
              <TouchableOpacity onPress={() => setShowLogoutModal(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <View style={styles.separator} />

              <TouchableOpacity onPress={handleLogoutConfirm}>
                <Text style={styles.logoutText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
  },
  scrollContainer: {
    padding: moderateScale(20),
    paddingBottom: verticalScale(80),
    paddingTop: verticalScale(60),
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: verticalScale(6),
  },
  profileImage: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: moderateScale(50),
    borderWidth: 2,
    borderColor: BASE_COLORS.PRIMARY_DARK,
  },
  editProfileIconButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: BASE_COLORS.PRIMARY,
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: BASE_COLORS.WHITE,
    zIndex: 10,
  },
  userName: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: BASE_COLORS.BLACK,
    marginBottom: verticalScale(3),
  },
  userEmail: {
    fontSize: moderateScale(14),
    color: BASE_COLORS.TEXT_SECONDARY,
    marginBottom: verticalScale(3),
  },
  menuContainer: {
    borderTopWidth: 1,
    borderTopColor: BASE_COLORS.PRIMARY_DARK,
    marginBottom: verticalScale(60),
    marginTop: verticalScale(7),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: BASE_COLORS.PRIMARY_DARK,
  },
  icon: {
    marginRight: moderateScale(15),
    width: moderateScale(20),
  },
  menuItemText: {
    flex: 1,
    fontSize: moderateScale(12),
    color: BASE_COLORS.TEXT_PRIMARY,
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
  modaldetail: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: BASE_COLORS.TEXT_PRIMARY,
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
  cancelText: {
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
