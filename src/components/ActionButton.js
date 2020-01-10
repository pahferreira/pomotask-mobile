import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Colors } from '../theme/Theme';
import i18n from '../i18n/i18n';

const ActionButton = props => {
  const { clockIsRunning, onPressPause, onPressPlay } = props;

  const _renderButton = () => {
    if (clockIsRunning) {
      return (
        <TouchableOpacity
          style={[styles.container, styles.pauseButton]}
          onPress={onPressPause}>
          <Text style={styles.text}>
            {i18n.t('buttons.pause').toUpperCase()}
          </Text>
          <Icon name="pause" size={16} color="white" style={styles.icon} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={[styles.container, styles.playButton]}
        onPress={onPressPlay}>
        <Text style={styles.text}>{i18n.t('buttons.play').toUpperCase()}</Text>
        <Icon name="play-arrow" size={16} color="white" style={styles.icon} />
      </TouchableOpacity>
    );
  };

  return _renderButton();
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 34,
    width: 100,
    borderRadius: 10,
  },
  text: {
    color: Colors.WHITE,
  },
  playButton: {
    backgroundColor: Colors.GREEN,
  },
  pauseButton: {
    backgroundColor: Colors.RED,
  },
  icon: {
    marginLeft: 10,
  },
});

export default ActionButton;
