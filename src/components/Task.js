import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { Colors, Metrics } from '../theme/Theme';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
    borderBottomWidth: 0.7,
    borderBottomColor: Colors.BLACK_TRANSPARENT,
  },
  text: {
    color: Colors.BLUE,
    fontFamily: 'Roboto',
    fontSize: Metrics.text.medium,
    width: '80%',
  },
  checkButton: {
    width: '8%',
  },
});

export default Task;
