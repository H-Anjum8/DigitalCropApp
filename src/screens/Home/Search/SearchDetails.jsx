import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { ICONS, IMAGES } from '../../../utils/appAssets';
import BASE_COLORS from '../../../utils/colors';
import CustomButton from '../../../components/commonComponents/CustomButton';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const SearchDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainheader}>
        <Text style={styles.header}>Smart AI Search</Text>

        <Image source={ICONS.NOTIFICATION} style={styles.notificationIcon} />
      </View>

      <View style={styles.searchBox}>
        <Image source={ICONS.STAR} style={styles.starIcon} />
        <TextInput
          placeholder="Fungicide dose for tomato"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.description}>
          The recommended treatment is Propiconazole 25% EC at a dosage of
          200–250 ml per acre mixed in 200 liters of water. Spray in the morning
          or evening, and repeat if needed. Refer to page 142 of the 2025 guide.
        </Text>
        <CustomButton
          title="View More Info"
          onPress={() => navigation.navigate('search_result')}
          buttonStyle={{
            paddingVertical: verticalScale(12),
            paddingHorizontal: moderateScale(10),
            alignSelf: 'flex-start',
          }}
          textStyle={{ fontSize: moderateScale(10) }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2E7D32', // Dark green
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
    borderWidth: 1.5,
    marginBottom: 18,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 10,
    fontWeight: 500,
    color: BASE_COLORS.LIGHT_GRAY,
  },

  notificationIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 0,
    top: 5,
  },
  resultContainer: {
    padding: 10,
    borderRadius: 16,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
    borderWidth: 1,
  },
  description: { fontSize: 12, color: '#333', marginTop: 10, marginBottom: 20 },
});

export default SearchDetails;
