import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { ICONS } from '../../../utils/appAssets';
import BASE_COLORS from '../../../utils/colors';
import RecentAIResultItem from '../../../components/HomeComponents/RecentAIResultItem';
import BackButton from '../../../components/commonComponents/BackButton';

const SearchResult = () => {
  const recentResults = [
    { id: '1', title: 'Fungicide suggestion for wheat' },
    { id: '2', title: 'Fungicide suggestion for rice' },
    // more items, if needed
  ];
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.mainheader}>
        <Text style={styles.header}>Smart AI Search</Text>

        <Image source={ICONS.NOTIFICATION} style={styles.notificationIcon} />
      </View>

      <View style={styles.searchBox}>
        <Image source={ICONS.STAR} style={styles.starIcon} />
        <TextInput
          placeholder="Describe your crop issue (e.g., fungus on barley)"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>
      {/* AI Results */}
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Your Recent AI Results</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ai_results_list')}
          >
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={recentResults.slice(0, 2)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <RecentAIResultItem
              title={item.title}
              onPress={() =>
                navigation.navigate('ai_result_detail', { result: item })
              }
            />
          )}
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
  mainheader: {
    marginTop: 30,
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
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 8,
  },
  viewAll: {
    fontSize: 12,
    textAlign: 'right',
    color: BASE_COLORS.PRIMARY,
    marginTop: 6,
    marginBottom: 20,
  },
});

export default SearchResult;
