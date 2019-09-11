import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from './styles/TaskListStyle';
import { Colors } from '../theme/Theme';

// Components
import Task from './Task';

const TaskList = props => {
  const { visible, onClose } = props;
  const { width } = Dimensions.get('screen');
  let positionAnimatedValue = new Animated.Value(-width);
  const data = [
    { name: 'Clean the Bathroom', done: true },
    { name: 'Take the dogs for a walk', done: true },
    { name: 'Study math', done: false },
    { name: 'Dance Lessons at Gym', done: false },
    { name: 'Write about the things I should do tomorrow', done: false },
  ];

  if (visible) {
    Animated.timing(positionAnimatedValue, {
      duration: 500,
      toValue: 0,
      easing: Easing.bezier(0, 0, 0.34, 0.99),
    }).start();
  } else {
    Animated.timing(positionAnimatedValue, {
      duration: 500,
      toValue: -width,
      easing: Easing.bezier(0, 0, 0.34, 0.99),
    }).start();
  }

  return (
    <Animated.View style={[styles.container, { left: positionAnimatedValue }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Icon name="times" size={34} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={({ item }) => (
          <Task task={item} keyExtractor={(item, index) => index} />
        )}
      />
    </Animated.View>
  );
};

export default TaskList;
