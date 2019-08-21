import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import ClockScreen from '../views/ClockScreen';

const AppStack = createStackNavigator(
  {
    ClockScreen: { screen: ClockScreen },
  },
  {
    initialRouteName: 'ClockScreen',
  },
);

export default createAppContainer(
  createSwitchNavigator({
    AppStack,
  }),
);
