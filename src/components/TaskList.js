import React, { useContext } from 'react';
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
import Context from '../context/Context';

// Components
import Task from './Task';

const TaskList = props => {
  const { dispatch } = useContext(Context);
  const { visible, onClose, taskList } = props;
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
      easing: Easing.bezier(0, 0.01, 1, 0.27),
    }).start();
  }

  const onFinishTask = index => {
    dispatch({
      type: 'FINISH_TASK',
      payload: {
        index,
      },
    });
  };

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
        data={taskList}
        renderItem={({ item, index }) => {
          return <Task task={item} onPress={() => onFinishTask(index)} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </Animated.View>
  );
};

export default TaskList;
