import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import { ICONS } from '../../../utils/appAssets';
import BASE_COLORS from '../../../utils/colors';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { data } from '../../../utils/staticData';

const ITEMS_PER_PAGE = 3;

const Guide = () => {
  const navigation = useNavigation();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [page, setPage] = useState(1);

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const firstVisibleIndex = viewableItems[0].index;
      const newPage = Math.floor(firstVisibleIndex / ITEMS_PER_PAGE) + 1;
      setPage(newPage);
    }
  });

  const handleSearchToggle = () => {
    setSearchVisible(!searchVisible);
    setSearchText('');
    setFilteredData(data);
    Keyboard.dismiss();
  };

  const handleSearchSubmit = () => {
    Keyboard.dismiss();
    const keyword = searchText.trim().toLowerCase();
    const results = data.filter(
      item =>
        item.title.toLowerCase().includes(keyword) ||
        item.content.toLowerCase().includes(keyword),
    );
    setFilteredData(keyword ? results : data);
  };

  const highlightText = (text, keyword) => {
    if (!keyword) return <Text>{text}</Text>;
    const regex = new RegExp(`(${keyword})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <Text key={index} style={styles.highlightText}>
          {part}
        </Text>
      ) : (
        <Text key={index}>{part}</Text>
      ),
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerTitleRow}>
        <Text style={styles.Name}>2025 Crop{'\n'}Protection Guide</Text>
        <Image source={ICONS.LEAVES} style={styles.leaveIcon} />
      </View>

      {/* FlatList */}
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.sectionTitle}>
              {highlightText(`${item.crop}: ${item.title}`, searchText)}
            </Text>
            <Text style={styles.paragraph}>
              {highlightText(item.content, searchText)}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No results found.
          </Text>
        }
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {searchVisible ? (
          <>
            {/* Cross icon on left */}
            <TouchableOpacity onPress={handleSearchToggle}>
              <Icon
                name="close"
                size={22}
                color="#000"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>

            {/* Search Input */}
            <View style={[styles.searchWrapper, { flex: 1 }]}>
              <TextInput
                placeholder="Search..."
                style={styles.searchInput}
                value={searchText}
                onChangeText={text => {
                  setSearchText(text);
                  const keyword = text.trim().toLowerCase();
                  const results = data.filter(
                    item =>
                      item.title.toLowerCase().includes(keyword) ||
                      item.content.toLowerCase().includes(keyword),
                  );
                  setFilteredData(keyword ? results : data);
                }}
                autoFocus
              />
              <TouchableOpacity onPress={handleSearchSubmit}>
                <Icon name="search" size={22} color="#000" />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            {/* Back Button */}
            <View>
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="chevron-back" />
              </TouchableOpacity>
              <Text style={styles.navText}>Back</Text>
            </View>

            {/* Page Number */}
            <Text style={styles.pageNumber}>
              {page} / {Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
            </Text>

            {/* Search Button */}
            <View style={styles.searchWrapper}>
              <TouchableOpacity onPress={handleSearchToggle}>
                <Icon name="search" size={24} color="#000" />
                <Text style={styles.search}>Search</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Guide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  headerTitleRow: {
    marginBottom: 20,
    flexDirection: 'row',
    position: 'relative',
  },
  itemBox: {
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  paragraph: {
    fontSize: 11,
    color: '#333',
    marginTop: 8,
  },
  highlightText: {
    backgroundColor: '#FFEB99',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  backBtn: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? verticalScale(50) : verticalScale(30),
    left: moderateScale(-4),
    width: moderateScale(30),
    height: moderateScale(30),
    backgroundColor: BASE_COLORS.WHITE,
    borderRadius: moderateScale(20),
    borderColor: BASE_COLORS.BLACK,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    top: -6,
  },
  navText: {
    fontSize: 8,
    marginTop: 24,
    color: '#000',
  },
  pageNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    paddingVertical: 4,
    paddingHorizontal: 20,
    fontSize: 14,
    backgroundColor: BASE_COLORS.WHITE,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 6,
    minWidth: 230,
  },
  Name: {
    fontSize: 23,
    fontWeight: '500',
    color: BASE_COLORS.TEXT_GREEN,
  },
  leaveIcon: {
    width: 50,
    height: 50,
    top: 14,
    left: 206,
    position: 'absolute',
  },
  search: {
    fontSize: 10,
    marginLeft: 4,
  },
});
