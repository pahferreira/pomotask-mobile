import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../theme/Theme';

const Button = props => {
  const { name, onPress } = props;

  return (
    <TouchableOpacity
      style={[styles.container, styles.playButton]}
      onPress={onPress}>
      <Text style={styles.text}>{name.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    height: '100%',
    borderWidth: 0.8,
    borderLeftWidth: 0,
    borderRightWidth: 0.8,
    borderColor: Colors.BLUE,
  },
  text: {
    color: Colors.BLUE,
    fontWeight: 'bold',
    fontSize: Metrics.text.medium,
  },
});

export default Button;
