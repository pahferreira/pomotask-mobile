import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from './styles/ActionButtonStyle';

const ActionButton = props => {
  const { color, name, icon, onPress, width } = props;
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color, width }]}
      onPress={onPress}>
      <Text style={styles.text}>{name.toUpperCase()}</Text>
      {icon && <Icon name={icon} size={14} color="white" style={styles.icon} />}
    </TouchableOpacity>
  );
};

export default ActionButton;
