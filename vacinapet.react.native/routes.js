import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import PasswordRecoverScreen from './screens/PasswordRecover';
import HomeScreen from './screens/Home';

const navigationOptions = ({ navigation }) => ({ header: null });

// const tabsNavigationOptions = ({ navigation }) =>({

// });

const tabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
});

const defaultNavigator = createStackNavigator({
    login: { 
        screen: LoginScreen, 
        navigationOptions
    },
    signUp: {
        screen: SignUpScreen,
        navigationOptions
    },
    passwordRecover: {
        screen: PasswordRecoverScreen,
        navigationOptions
    },
    home: { screen: tabNavigator }
});

export default createAppContainer(defaultNavigator);