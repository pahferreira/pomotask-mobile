import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Colors } from '../theme/Theme';
import Context from '../context/Context';
import i18n from '../i18n/i18n';

// Components
import Task from './Task';

const TaskList = props => {
  const { state, dispatch } = useContext(Context);
  const { taskList } = state;
  const { visible, onClose } = props;
  const { width } = Dimensions.get('screen');
  const [positionAnimatedValue] = useState(new Animated.Value(-width));

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
  }, [positionAnimatedValue, visible, width]);

  const onFinishTask = index => {
    dispatch({
      type: 'FINISH_TASK',
      payload: {
        index,
      },
    });
  };

  const cleanDoneTasks = () => {
    dispatch({
      type: 'CLEAR_TASK_LIST',
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
        <Text style={styles.text}>{i18n.t('tasks.taskList.message')}</Text>
      );
    }
  };

  return (
    <Animated.View style={[styles.container, { left: positionAnimatedValue }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Icon name="close" size={30} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{i18n.t('tasks.taskList.title')}</Text>
        {_renderList()}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={cleanDoneTasks}>
          <Text style={styles.buttonText}>
            {i18n.t('tasks.taskList.clear').toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '2.5%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: +2,
    backgroundColor: Colors.WHITE,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: Colors.BLACK_TRANSPARENT,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '5%',
  },
  body: {
    height: '90%',
    alignItems: 'center',
  },
  footer: {
    height: '5%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  listContainer: {
    width: '100%',
  },
  text: {
    fontFamily: 'Roboto',
    color: Colors.BLACK,
  },
  title: {
    fontSize: 40,
    fontFamily: 'IndieFlower',
    marginVertical: 20,
    color: Colors.BLUE,
  },
  buttonText: {
    color: Colors.RED,
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(TaskList);
