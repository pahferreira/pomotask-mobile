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
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(
  createSwitchNavigator({
    AppStack,
  }),
);
