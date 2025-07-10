import React from 'react';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import COLORS from '../../utils/colors';

const BackButton = ({
  onPress,
  iconColor = COLORS.BLACK,
  iconSize = 22,
  style,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.backBtn, style]}
      onPress={onPress ? onPress : () => navigation.goBack()}
    >
      <Ionicons
        name="chevron-back"
        size={moderateScale(iconSize)}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? verticalScale(50) : verticalScale(30),
    left: moderateScale(20),
    width: moderateScale(32),
    height: moderateScale(32),
    backgroundColor: COLORS.WHITE,
    borderRadius: moderateScale(20),
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});

export default BackButton;
