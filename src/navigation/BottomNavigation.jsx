import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BOTTOM_ROUTES } from '../utils/routlist';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: true }}
    >
      {BOTTOM_ROUTES.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            ...route.options,
            tabBarLabel: route.label || route.name,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
