import React from 'react';
import { Text } from 'react-native';
import styles from './styles/ClockStyle';

const Clock = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

export default Clock;
