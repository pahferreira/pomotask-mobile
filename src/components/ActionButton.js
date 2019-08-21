import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from './styles/ActionButtonStyle';

const ActionButton = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{props.name}</Text>
      <Icon name={props.icon} size={16} color="black" />
    </TouchableOpacity>
  );
};

export default ActionButton;
