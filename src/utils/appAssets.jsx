const images = {
  DOCTOR_iMAGE: require('../assets/doctorImage.png'),
  // leafpattern: require('../assets/leafpattern.png'),
  FARMER: require('../assets/farmer.png'),
  FUNGUS: require('../assets/fungus.png'),
  VERIFIED: require('../assets/verified.png'),
  USER1: require('../assets/user1.png'),
  USER2: require('../assets/user2.jpg'),
};

const icons = {
  HOME_WHITE: require('../assets/bottomIcons/home.png'),
  GUIDE: require('../assets/bottomIcons/guide.png'),
  SEARCH: require('../assets/bottomIcons/search.png'),
  SETTING: require('../assets/bottomIcons/setting.png'),
  NOTIFICATION: require('../assets/icons/notification.png'),
  LEAVES: require('../assets/icons/leaves.png'),
  STAR: require('../assets/icons/star.png'),
  BOOK: require('../assets/icons/book.png'),
  TRUE: require('../assets/icons/true.png'),
};

// Export assets
export const IMAGES = images;
export const ICONS = {
  ...icons,
};

export default {
  IMAGES,
  ICONS,
};
