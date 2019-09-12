import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from './styles/TaskStyle';
import { Colors } from '../theme/Theme';

const Task = props => {
  const { task, onPress } = props;

  const isDone = () => {
    if (task.done) {
      return {
        textDecorationLine: 'line-through',
      };
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, isDone()]}>{task.name}</Text>
      {!task.done && (
        <TouchableOpacity style={styles.checkButton} onPress={onPress}>
          <Icon name="check" size={20} color={Colors.GREEN} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Task;
