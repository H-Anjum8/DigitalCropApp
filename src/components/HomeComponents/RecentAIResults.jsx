import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const RecentAIResults = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Your Recent AI Results</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Search Result 1 */}
      <TouchableOpacity style={styles.searchRow}>
        <Icon name="search" size={20} color="#4CAF50" style={styles.icon} />
        <Text style={styles.searchText}>Fungicide suggestion for wheat</Text>
        <Icon name="chevron-right" size={20} color="#4CAF50" />
      </TouchableOpacity>

      {/* Search Result 2 */}
      <TouchableOpacity style={styles.searchRow}>
        <Icon name="search" size={20} color="#4CAF50" style={styles.icon} />
        <Text style={styles.searchText}>Fungicide suggestion for wheat</Text>
        <Icon name="chevron-right" size={20} color="#4CAF50" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1B5E20',
  },
  viewAllText: {
    fontSize: 14,
    color: '#388E3C',
    fontWeight: '500',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  searchText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});

export default RecentAIResults;
