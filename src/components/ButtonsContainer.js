import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from './ActionButton';
import { Colors } from '../theme/Theme';
import styles from './styles/ButtonsContainerStyle';

const Buttons = props => {
  const { clockIsRunning, onPlay, onPause, onReset, onRest } = props;
  const playOrPause = () => {
    if (clockIsRunning) {
      return (
        <ActionButton
          name="pause"
          icon="pause"
          color={Colors.RED}
          onPress={onPause}
        />
      );
    } else {
      return (
        <ActionButton
          name="play"
          icon="play"
          color={Colors.GREEN}
          onPress={onPlay}
        />
      );
    }
  };
  return (
    <View style={styles.containerButtons}>
      {playOrPause()}
      <ActionButton
        name="reset"
        icon="refresh"
        color={Colors.BLUE}
        onPress={onReset}
      />
      <ActionButton
        name="rest"
        icon="power-off"
        color={Colors.BLUE}
        onPress={onRest}
      />
    </View>
  );
};

export default Buttons;
