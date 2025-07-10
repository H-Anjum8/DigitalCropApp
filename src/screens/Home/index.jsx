import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { ICONS, IMAGES } from '../../utils/appAssets';
import BASE_COLORS from '../../utils/colors';
import CustomButton from '../../components/commonComponents/CustomButton';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import RecentAIResultItem from '../../components/HomeComponents/RecentAIResultItem';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const recentResults = [
    { id: '1', title: 'Fungicide suggestion for wheat' },
    { id: '2', title: 'Fungicide suggestion for rice' },
    // more items, if needed
  ];
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleRow}>
          <Text style={styles.appName}>
            Welcome to SmartCropCare{' '}
            <Image source={ICONS.LEAVES} style={styles.leaveIcon} />
          </Text>
        </View>

        <Image source={ICONS.NOTIFICATION} style={styles.notificationIcon} />
      </View>
      {/* Disease Box */}
      <View style={styles.card}>
        <View>
          <Image source={ICONS.STAR} style={styles.starIcon} />
        </View>

        <Text style={styles.diseaseTitle}>
          Describe your crop issue (e.g., fungus on barley)
        </Text>

        {/* <Text style={styles.diseaseText}>
          The recommended treatment is Propiconazole 25% EC at a dosage of
          200–250 ml per acre mixed in 200 liters of water. Spray in the morning
          or evening, and repeat if needed. Refer to page 142 of the 2025 guide.
        </Text> */}
        {/* <CustomButton
          title="View More Info"
          style={{ flex: 1 }}
          onPress={() => Navigation.navigate('Login')}
        /> */}
      </View>
      {/* Upgrade Card */}
      <View style={styles.upgradeCard}>
        <View style={styles.upgradeContent}>
          <View style={styles.upgrateTextContainer}>
            <Text style={styles.upgradeTitle}>Need Personal Advice?</Text>
            <Text style={styles.upgradeSub}>
              Message a certified agri-chemical expert directly.
            </Text>
            <CustomButton
              title="Upgrade to Unlock"
              onPress={() => navigation.navigate('subscription')}
              // onPress={() => navigation.navigate('chat')}
              buttonStyle={{
                paddingVertical: verticalScale(8),
                paddingHorizontal: moderateScale(10),
                alignSelf: 'flex-start',
              }}
              textStyle={{ fontSize: moderateScale(10) }}
              style={styles.upgradeBtn}
              iconName="lock-closed-outline"
            />
          </View>
          <View style={styles.imgContainer}>
            <Image source={IMAGES.DOCTOR_iMAGE} style={styles.doctorImage} />
          </View>
        </View>
      </View>

      {/* AI Results */}
      <View>
        <Text style={styles.heading}>Your Recent AI Results</Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('ai_results_list')}
        >
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      {/* Crop Guide Card */}
      <View style={styles.card}>
        <View>
          <Image source={ICONS.BOOK} style={styles.bookIcon} />
        </View>

        {/* <Icon name="file-text" size={24} color="#4CAF50" /> */}
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Crop Guide</Text>
          <Text style={styles.cardDescription}>
            Explore the full PDF guide with easy search and navigation.
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewGuideText}>View Guide</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
    position: 'relative',
  },
  appName: {
    fontSize: 24,
    fontWeight: 500,
    color: BASE_COLORS.TEXT_GREEN,
  },
  leaveIcon: {
    width: 30,
    height: 30,
    lineHeight: 50,
  },
  notificationIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 0,
    top: 45,
  },
  card: {
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
    padding: 12,
    marginBottom: 16,
  },
  starIcon: {
    width: 20,
    height: 20,
    lineHeight: 50,
    marginRight: 6,
  },
  diseaseTitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#044206',

    justifyContent: 'center',
  },
  diseaseText: {
    fontSize: 10,
    color: '#2F2F2F',
    marginVertical: 12,
    marginBottom: 20,
  },
  bookIcon: {
    width: 50,
    height: 50,

    marginRight: 10,
  },

  viewButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  upgradeCard: {
    backgroundColor: BASE_COLORS.PRIMARY_LIGHT,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    marginTop: 14,
  },
  upgradeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upgrateTextContainer: {
    width: '68%',
  },
  upgradeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: BASE_COLORS.TEXT_GREEN,
  },
  upgradeSub: {
    fontSize: 10,
    color: '#6C6C6C',
    marginVertical: 6,
  },

  upgradeBtn: {
    marginTop: 10,
  },
  imgContainer: {
    width: '30%',
    height: 150,
  },
  doctorImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    left: 20,

    resizeMode: 'cover',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F2F2F',
  },
  viewAll: {
    fontSize: 13,
    color: BASE_COLORS.PRIMARY_LIGHT,
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    paddingVertical: 14,
  },
  listText: {
    fontSize: 14,
    color: '#2F2F2F',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    gap: 6,
    borderRadius: 12,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
    borderWidth: 1,
  },

  cardContent: {
    marginLeft: 12,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1B5E20',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 10,
    color: '#555',
    marginBottom: 6,
  },
  viewGuideText: {
    fontSize: 14,
    color: '#388E3C',
    fontWeight: '400',
  },
  container1: { padding: 16 },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 8,
  },
  viewAll: {
    textAlign: 'right',
    color: BASE_COLORS.PRIMARY,
    marginTop: 6,
    marginBottom: 20,
  },
});

export default Home;
