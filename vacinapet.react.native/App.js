import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/Login';

const defaultNavigator = createStackNavigator({
  login: { 
    screen: LoginScreen, 
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

export default createAppContainer(defaultNavigator);