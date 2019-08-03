import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import FirstScreenView from '../views/FirstScreen';
import SecondScreenView from '../views/SecondScreen';


const MainStack = createStackNavigator({
  FirstScreen: FirstScreenView,
  SecondScreen: SecondScreenView,
});

const RootNavigation = createSwitchNavigator(
  {
    Main: MainStack,
  }, {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(RootNavigation);
