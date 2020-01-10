import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../theme/Theme';

const Clock = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: Metrics.clock,
    fontFamily: 'SourceCodePro',
    marginBottom: 20,
    color: Colors.BLACK,
  },
});

export default Clock;
