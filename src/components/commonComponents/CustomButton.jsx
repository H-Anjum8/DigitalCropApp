import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import BASE_COLORS from '../../utils/colors';

const CustomButton = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  iconName,
  iconColor,
  iconSize,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <View style={styles.content}>
        {iconName && (
          <Icon
            name={iconName}
            size={iconSize || moderateScale(12)}
            color={iconColor || BASE_COLORS.WHITE}
            style={styles.icon}
          />
        )}
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: BASE_COLORS.PRIMARY,
    paddingVertical: verticalScale(15),
    paddingHorizontal: moderateScale(24), // balanced padding
    borderRadius: moderateScale(12),
    alignSelf: 'center', // centers button if no container flex settings
    minWidth: moderateScale(140), // optional: ensures minimum width
  },
  buttonText: {
    color: BASE_COLORS.WHITE,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: moderateScale(12),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: moderateScale(8),
  },
});

export default CustomButton;
