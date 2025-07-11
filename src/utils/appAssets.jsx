const images = {
  SPLASH_SCREEN: require('../assets/Splash_screen.png'),
  DOCTOR_iMAGE: require('../assets/doctorImage.png'),
  FARMER: require('../assets/farmer.png'),
  FUNGUS: require('../assets/fungus.png'),
  VERIFIED: require('../assets/verified.png'),
  USER1: require('../assets/user1.png'),
  USER2: require('../assets/user2.jpg'),
  SEARCH_LENS: require('../assets/search_lens.png'),
  PROFILE: require('../assets/user2.jpg'),
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
  TICK: require('../assets/icons/tick.png'),
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
