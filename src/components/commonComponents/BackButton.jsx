import React from 'react';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import COLORS from '../../utils/colors';

const BackButton = ({
  onPress,
  iconColor = COLORS.BLACK,
  iconSize = 2,
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
        size={moderateScale(iconSize)} // now scales from a base 24
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? verticalScale(50) : verticalScale(30),
    left: moderateScale(2),
    width: moderateScale(3),
    height: moderateScale(3),
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
