import React from 'react';
import { View } from 'react-native';
import styles from './styles/ClockScreenStyle';

// Components
import ActionButton from '../components/ActionButton';
import Clock from '../components/Clock';

const ClockScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Clock />
        <View style={styles.containerButtons}>
          <ActionButton name="play" icon="play" />
          <ActionButton name="pause" icon="pause" />
          <ActionButton name="reset" icon="play" />
        </View>
      </View>
    </View>
  );
};

export default ClockScreen;
