import BottomNavigation from '../navigation/BottomNavigation';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import Guide from '../screens/Dashboard/Guide';
import Home from '../screens/Dashboard/Home';
import Search from '../screens/Dashboard/Search';
import Setting from '../screens/Dashboard/Setting';
import SplashScreen from '../screens/SplashScreen';

const Routes = {
  Splash: {
    name: 'splash_screen',
    component: SplashScreen,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  Login: {
    name: 'login_screen',
    component: Login,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  Signup: {
    name: 'signup',
    component: Signup,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  Dashboard: {
    name: 'dashboard',
    component: BottomNavigation,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: true,
  },
};

export const BOTTOM_ROUTES = [
  {
    name: 'home',
    component: Home,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    label: 'Home',
  },
  {
    name: 'search',
    component: Search,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    label: 'Search',
  },
  {
    name: 'setting',
    component: Setting,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    label: 'Setting',
  },
  {
    name: 'guide',
    component: Guide,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    label: 'Guide',
  },
];

export const getAuthScreens = () => {
  return Object.values(Routes).filter(route => !route.authRequired);
};

export const getProtectedScreens = () => {
  return Object.values(Routes).filter(route => route.authRequired);
};

export default Routes;
