import React from 'react';
import { View } from 'react-native';
import styles from './styles/ClockScreenStyle';
import { Colors } from '../theme/Theme';

// Components
import ActionButton from '../components/ActionButton';
import Clock from '../components/Clock';

const ClockScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Clock />
        <View style={styles.containerButtons}>
          <ActionButton name="play" icon="play" color={Colors.GREEN} />
          <ActionButton name="pause" icon="pause" color={Colors.RED} />
          <ActionButton name="reset" icon="redo" color={Colors.BLUE} />
        </View>
      </View>
    </View>
  );
};

export default ClockScreen;
