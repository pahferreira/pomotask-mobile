import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles/ActionButtonStyle';

const ActionButton = props => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.name}</Text>
      <Icon name={props.icon} size={14} color="white" />
    </TouchableOpacity>
  );
};

export default ActionButton;
