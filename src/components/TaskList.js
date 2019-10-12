import React, { useContext, useEffect } from 'react';
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
  const { state, dispatch } = useContext(Context);
  const { taskList } = state;
  const { visible, onClose } = props;
  const { width } = Dimensions.get('screen');
  let positionAnimatedValue = new Animated.Value(-width);

  useEffect(() => {
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
  }, [visible]);

  const onFinishTask = index => {
    dispatch({
      type: 'FINISH_TASK',
      payload: {
        index,
      },
    });
  };

  const _renderList = () => {
    if (taskList.length > 0) {
      return (
        <FlatList
          style={styles.listContainer}
          data={taskList}
          renderItem={({ item, index }) => {
            return <Task task={item} onPress={() => onFinishTask(index)} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    } else {
      return (
        <Text style={styles.text}>
          Your task list is empty. Please add one task.
        </Text>
      );
    }
  };

  return (
    <Animated.View style={[styles.container, { left: positionAnimatedValue }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Icon name="times" size={34} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Task List</Text>
      {_renderList()}
    </Animated.View>
  );
};

export default TaskList;
