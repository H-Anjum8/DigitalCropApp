import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import appAssets from '../../utils/appAssets';
import BASE_COLORS from '../../utils/colors';
import BackButton from '../../components/commonComponents/BackButton';
import CustomButton from '../../components/commonComponents/CustomButton';

const UploadProfileImage = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);

  const requestGalleryPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handleSelectImage = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      console.log('Permission denied');
      return;
    }

    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        console.log('Image Picked:', response.assets[0].uri);
        setPhoto(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.heading}>Upload your Profile Picture</Text>
      <Text style={styles.subheading}>
        Add a clear photo of yourself to personalize your profile and enhance
        your in-app experience.
      </Text>

      {/* Image */}
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={handleSelectImage}
      >
        <Image
          source={photo ? { uri: photo } : appAssets.IMAGES.PROFILE}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </TouchableOpacity>

      {/* Change picture */}
      <TouchableOpacity onPress={handleSelectImage}>
        <Text style={styles.changePictureText}>
          Change <Text style={styles.linkText}>Picture</Text>
        </Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <CustomButton
        title="Continue"
        onPress={() => navigation.navigate('signup_done')}
        buttonStyle={{ paddingHorizontal: moderateScale(122) }}
        textStyle={{ fontSize: moderateScale(14) }}
      />
    </View>
  );
};

export default UploadProfileImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
    padding: 22,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
    color: BASE_COLORS.TEXT_GREEN,
    marginTop: verticalScale(62),
    marginBottom: verticalScale(12),
  },
  subheading: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: BASE_COLORS.TEXT_SECONDARY,
    marginBottom: verticalScale(16),
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(15),
  },
  profileImage: {
    width: moderateScale(310),
    height: moderateScale(280),
    borderRadius: 18,
    borderWidth: 1,
    borderColor: BASE_COLORS.LIGHT_GRAY,
  },
  changePictureText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins_400Regular',
    color: BASE_COLORS.TEXT_TERNARY,
    marginTop: verticalScale(-3),
    marginBottom: verticalScale(130),
  },
  linkText: {
    color: BASE_COLORS.PRIMARY,
    fontFamily: 'Poppins_600SemiBold',
  },
});
