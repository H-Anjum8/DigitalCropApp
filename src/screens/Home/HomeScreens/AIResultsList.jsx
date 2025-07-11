// AIResultsListScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import RecentAIResultItem from '../../../components/HomeComponents/RecentAIResultItem';
import BASE_COLORS from '../../../utils/colors';
import BackButton from '../../../components/commonComponents/BackButton';

const AIResultsList = ({ navigation }) => {
  // const navigation = useNavigation();

  const allResults = Array(7)
    .fill()
    .map((_, i) => ({
      id: i.toString(),
      title: 'Fungicide suggestion for wheat',
    }));

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.header}>Recent AI Results</Text>
      <FlatList
        data={allResults}
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
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 6,
    backgroundColor: BASE_COLORS.WHITE,
    height: '100%',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 20,
    color: BASE_COLORS.TEXT_GREEN,
    marginTop: 70,
  },
});

export default AIResultsList;
