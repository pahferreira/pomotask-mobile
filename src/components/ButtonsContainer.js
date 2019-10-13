import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from './ActionButton';
import { Colors } from '../theme/Theme';
import styles from './styles/ButtonsContainerStyle';
import i18n from '../i18n/i18n';

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
          name={i18n.t('buttons.pause')}
          icon="pause"
          color={Colors.RED}
          onPress={onPause}
        />
      );
    } else {
      return (
        <ActionButton
          name={i18n.t('buttons.play')}
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
              name={i18n.t('buttons.work')}
              icon="fire"
              color={Colors.BLUE}
              onPress={setWork}
              width={130}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ActionButton
              name={i18n.t('buttons.rest')}
              icon="coffee"
              color={Colors.BLUE}
              onPress={setRest}
              width={130}
            />
          </View>
        </>
      );
    }
  };

  return <View style={styles.containerButtons}>{renderButtons()}</View>;
};

export default Buttons;
