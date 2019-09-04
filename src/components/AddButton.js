import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from './styles/AddButtonStyle';

const AddButton = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="plus" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default AddButton;
