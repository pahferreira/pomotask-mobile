import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles/ActionButtonStyle';

const ActionButton = props => {
  const { color, name, icon } = props;
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>{name.toUpperCase()}</Text>
      {icon && <Icon name={icon} size={14} color="white" />}
    </TouchableOpacity>
  );
};

export default ActionButton;
