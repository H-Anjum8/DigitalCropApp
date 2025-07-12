import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ICONS, IMAGES } from '../../../utils/appAssets';
import BASE_COLORS from '../../../utils/colors';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import CustomButton from '../../../components/commonComponents/CustomButton';

const Search = () => {
  const [query, setQuery] = useState('');
  const [showResult, setShowResult] = useState(false);
  const navigation = useNavigation();

  const handleSearch = () => {
    if (query.trim().length > 0) {
      Keyboard.dismiss();
      setShowResult(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainheader}>
        <Text style={styles.header}>Smart AI Search</Text>
        <Image source={ICONS.NOTIFICATION} style={styles.notificationIcon} />
      </View>

      <View style={styles.searchBox}>
        <Image source={ICONS.STAR} style={styles.starIcon} />
        <TextInput
          placeholder="Describe your crop issue (e.g., fungus on barley)"
          placeholderTextColor="#999"
          value={query}
          onChangeText={text => {
            setQuery(text);
            if (text.trim().length === 0) {
              setShowResult(false); // Hide result when input is cleared
            }
          }}
          onSubmitEditing={handleSearch}
          style={styles.input}
          returnKeyType="search"
        />
      </View>

      {!showResult && (
        <View style={styles.centerSection}>
          <Image source={IMAGES.SEARCH_LENS} style={styles.centerIcon} />
        </View>
      )}

      {showResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.description}>
            The recommended treatment is Propiconazole 25% EC at a dosage of
            200–250 ml per acre mixed in 200 liters of water. Spray in the
            morning or evening, and repeat if needed. Refer to page 142 of the
            2025 guide.
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
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
    borderRadius: 20,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
    borderWidth: 1,
    marginBottom: 30,
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
    fontWeight: '500',
    color: BASE_COLORS.LIGHT_GRAY,
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  mainheader: {
    marginBottom: 6,
    position: 'relative',
  },
  notificationIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 0,
    top: 5,
  },
  centerIcon: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  centerText: {
    textAlign: 'center',
    color: '#A0A0A0',
    fontSize: 14,
    lineHeight: 20,
  },
  resultContainer: {
    padding: 10,
    borderRadius: 16,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
    borderWidth: 1,
  },
  description: {
    fontSize: 12,
    color: '#333',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Search;
