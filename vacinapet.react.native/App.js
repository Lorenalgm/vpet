import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import PasswordRecoverScreen from './screens/PasswordRecover';



const defaultNavigator = createStackNavigator({
  login: { 
    screen: LoginScreen, 
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  signUp: {
    screen: SignUpScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  passwordRecover: {
    screen: PasswordRecoverScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

export default createAppContainer(defaultNavigator);