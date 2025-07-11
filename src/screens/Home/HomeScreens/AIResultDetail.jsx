// AIResultDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BASE_COLORS from '../../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../components/commonComponents/CustomButton';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BackButton from '../../../components/commonComponents/BackButton';

const AIResultDetail = ({ route }) => {
  const { result } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Recent AI Result</Text>
      <View style={styles.resultBox}>
        <Icon name="search-outline" size={22} color={BASE_COLORS.PRIMARY} />
        <Text style={styles.query}>{result.title}</Text>
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et urna
        nec justo convallis facilisis. Morbi convallis convallis diam. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Fusce et urna nec
        justo convallis facilisis. Morbi convallis convallis diam.
      </Text>
      <CustomButton
        title="View More Info"
        onPress={() => navigation.navigate('ai_results_list')}
        buttonStyle={{
          paddingVertical: verticalScale(12),
          paddingHorizontal: moderateScale(10),
          alignSelf: 'flex-start',
        }}
        textStyle={{ fontSize: moderateScale(10) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: BASE_COLORS.WHITE,
    height: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: BASE_COLORS.TEXT_GREEN,
    marginTop: 70,
  },
  resultBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 8,
    marginVertical: 6,
    borderRadius: 12,

    borderWidth: 2,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
  },
  query: { marginLeft: 8, fontSize: 16, color: BASE_COLORS.GRAY },
  description: { fontSize: 14, color: '#333', marginTop: 10, marginBottom: 20 },
});

export default AIResultDetail;
