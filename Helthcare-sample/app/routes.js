import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Landing, HelpSteps, LoginDashboard, Signup, Login} from './screens';
import TabViewHandler from './screens/TabViewHandler';

const LoginStack = createStackNavigator(
  {
    LoginDashboard,
    Signup,
    Login,
  },
  {headerMode: 'none', initialRouteName: 'LoginDashboard'},
);

const AppNavigator = createSwitchNavigator(
  {
    Landing,
    HelpSteps,
    LoginStack,
    TabViewHandler, // In this component we are checking, either show Family or Nurse stack
  },
  {
    initialRouteName: 'Landing',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
