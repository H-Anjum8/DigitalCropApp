import BottomNavigation from '../navigation/BottomNavigation';
import ForgotPassword from '../screens/Auth/ForgotPasswordScreens/ForgotPassword';
import NewPassword from '../screens/Auth/ForgotPasswordScreens/NewPassword';
import ResetPasswordSuccess from '../screens/Auth/ForgotPasswordScreens/ResetPasswordSuccess';
import VerifyOTP from '../screens/Auth/ForgotPasswordScreens/VerifyOTP';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import SignupDone from '../screens/Auth/SignupDone';
import SignupOTPVerify from '../screens/Auth/SignupOTPVerify';
import UploadProfileImage from '../screens/Auth/UploadProfileImage';
import Home from '../screens/Home';
import Guide from '../screens/Home/Guide';
import AIResultDetail from '../screens/Home/HomeScreens/AIResultDetail';
import AIResultsList from '../screens/Home/HomeScreens/AIResultsList';
import Chat from '../screens/Home/HomeScreens/Chat';
import Search from '../screens/Home/Search';
import SearchDetails from '../screens/Home/Search/SearchDetails';
import SearchResult from '../screens/Home/Search/SearchResult';
import Setting from '../screens/Home/Setting';
import ChangePassword from '../screens/Home/Setting/ChangePassword';
import CurrentPlan from '../screens/Home/Setting/CurrentPlan';
import EditProfile from '../screens/Home/Setting/EditProfile';
import PersonalInformation from '../screens/Home/Setting/PersonalInformation';
import PrivacyPolicy from '../screens/Home/Setting/PrivacyPolicy';
import TermsAndConditions from '../screens/Home/Setting/TermsAndConditions';
import IntroductionScreen from '../screens/IntroductionScreen';
import Experts from '../screens/IntroductionScreen/Experts';
import InstantAnswer from '../screens/IntroductionScreen/InstantAnswer';
import SplashScreen from '../screens/SplashScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import Payment from '../screens/SubscriptionScreen/Payment';
import SubcriptionDone from '../screens/SubscriptionScreen/SubcriptionDone';
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
  SignupOTPVerify: {
    name: 'signup_otp_verify',
    component: SignupOTPVerify,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  UploadProfileImage: {
    name: 'upload_profile_image',
    component: UploadProfileImage,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  SignupDone: {
    name: 'signup_done',
    component: SignupDone,
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
    authRequired: false,
  },
  SubscriptionScreen: {
    name: 'subscription',
    component: SubscriptionScreen,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  Payment: {
    name: 'payment',
    component: Payment,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  SubcriptionDone: {
    name: 'subcription_done',
    component: SubcriptionDone,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  Chat: {
    name: 'chat',
    component: Chat,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  AIResultsList: {
    name: 'ai_results_list',
    component: AIResultsList,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  AIResultDetail: {
    name: 'ai_result_detail',
    component: AIResultDetail,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

  Guide: {
    name: 'crop_guide',
    component: Guide,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  // Dashboard Search tab screens
  SearchDetails: {
    name: 'search_details',
    component: SearchDetails,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  SearchResult: {
    name: 'search_result',
    component: SearchResult,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  // Setting screens
  ChangePassword: {
    name: 'change_password',
    component: ChangePassword,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  PrivacyPolicy: {
    name: 'privacy_policy',
    component: PrivacyPolicy,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  TermsAndConditions: {
    name: 'terms_and_conditions',
    component: TermsAndConditions,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  PersonalInformation: {
    name: 'personal_information',
    component: PersonalInformation,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  EditProfile: {
    name: 'edit_profile',
    component: EditProfile,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  CurrentPlan: {
    name: 'current_plan',
    component: CurrentPlan,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  setting: {
    name: 'setting',
    component: Setting,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
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
