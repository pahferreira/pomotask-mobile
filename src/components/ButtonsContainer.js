import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from './ActionButton';
import { Colors } from '../theme/Theme';
import styles from './styles/ButtonsContainerStyle';

const Buttons = props => {
  const {
    clockIsRunning,
    onPlay,
    onPause,
    currentTime,
    setWork,
    setRest,
  } = props;
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

  const renderButtons = () => {
    if (currentTime) {
      return playOrPause();
    } else {
      return (
        <>
          <View style={styles.buttonContainer}>
            <ActionButton
              name="work"
              icon="fire"
              color={Colors.BLUE}
              onPress={setWork}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ActionButton
              name="rest"
              icon="coffee"
              color={Colors.BLUE}
              onPress={setRest}
            />
          </View>
        </>
      );
    }
  };

  return <View style={styles.containerButtons}>{renderButtons()}</View>;
};

export default Buttons;
