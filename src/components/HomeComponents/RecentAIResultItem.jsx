import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BASE_COLORS from '../../utils/colors';

const RecentAIResultItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Icon name="search-outline" size={22} color={BASE_COLORS.PRIMARY} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Icon name="chevron-forward" size={22} color={BASE_COLORS.PRIMARY} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 8,
    marginVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 8,
    color: BASE_COLORS.GRAY,
    fontSize: 14,
  },
});

export default RecentAIResultItem;
