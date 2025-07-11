import BottomNavigation from '../navigation/BottomNavigation';
import ForgotPassword from '../screens/Auth/ForgotPasswordScreens/ForgotPassword';
import NewPassword from '../screens/Auth/ForgotPasswordScreens/NewPassword';
import ResetPasswordSuccess from '../screens/Auth/ForgotPasswordScreens/ResetPasswordSuccess';
import VerifyOTP from '../screens/Auth/ForgotPasswordScreens/VerifyOTP';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import Home from '../screens/Home';
import Guide from '../screens/Home/Guide';
import AIResultDetail from '../screens/Home/HomeScreens/AIResultDetail';
import AIResultsList from '../screens/Home/HomeScreens/AIResultsList';
import Chat from '../screens/Home/HomeScreens/Chat';
import Search from '../screens/Home/Search';
import Setting from '../screens/Home/Setting';
import IntroductionScreen from '../screens/IntroductionScreen';
import Experts from '../screens/IntroductionScreen/Experts';
import InstantAnswer from '../screens/IntroductionScreen/InstantAnswer';
import SplashScreen from '../screens/SplashScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import { ICONS } from './appAssets';

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
  IntroductionScreen: {
    name: 'introduction',
    component: IntroductionScreen,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  InstantAnswer: {
    name: 'instant_answer',
    component: InstantAnswer,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  Experts: {
    name: 'experts',
    component: Experts,
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
  ForgotPassword: {
    name: 'forgot_password',
    component: ForgotPassword,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  VerifyOTP: {
    name: 'verify_otp',
    component: VerifyOTP,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  NewPassword: {
    name: 'new_password',
    component: NewPassword,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  ResetPasswordSuccess: {
    name: 'reset_pass_success',
    component: ResetPasswordSuccess,
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
  SubscriptionScreen: {
    name: 'subscription',
    component: SubscriptionScreen,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: true,
  },
  Chat: {
    name: 'chat',
    component: Chat,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: true,
  },
  AIResultsList: {
    name: 'ai_results_list',
    component: AIResultsList,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: true,
  },
  AIResultDetail: {
    name: 'ai_result_detail',
    component: AIResultDetail,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: true,
  },
  Guide: {
    name: 'crop_guide',
    component: Guide,
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
    icon: ICONS.HOME_WHITE,
    label: 'Home',
  },
  {
    name: 'guide',
    component: Guide,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    icon: ICONS.GUIDE,
    label: 'Guide',
  },
  {
    name: 'search',
    component: Search,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    icon: ICONS.SEARCH,
    label: 'Search',
  },
  {
    name: 'setting',
    component: Setting,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    icon: ICONS.SETTING,
    label: 'Setting',
  },
];

export const getAuthScreens = () => {
  return Object.values(Routes).filter(route => !route.authRequired);
};

export const getProtectedScreens = () => {
  return Object.values(Routes).filter(route => route.authRequired);
};

export default Routes;
