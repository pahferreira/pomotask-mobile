import React, { useState, useEffect, useRef, useContext } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles/ClockScreenStyle';
import { Colors } from '../theme/Theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Context from '../context/Context';
import Sound from 'react-native-sound';
import PushNotification from 'react-native-push-notification';

// Components
import ButtonsContainer from '../components/ButtonsContainer';
import Clock from '../components/Clock';
import AddButton from '../components/AddButton';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';

const TIME = 10;
const REST_TIME = 5;

Sound.setCategory('Playback');

const alarm = new Sound('alarm.mp3', Sound.MAIN_BUNDLE, err => {});

const ClockScreen = () => {
  const { dispatch } = useContext(Context);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);
  const [type, setType] = useState('work');
  const [currentTime, setCurrentTime] = useState(TIME);
  const [clockIsRunning, setClockIsRunning] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    if (clockIsRunning && currentTime > 0) {
      timeoutRef.current = setTimeout(updateTime, 1000);
    } else {
      clockStop();
    }
  }, [currentTime]);

  const formatTime = time => {
    let minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    let seconds = (time - minutes * 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  const updateTime = () => {
    setCurrentTime(currentTime - 1);
    if (currentTime === 0) {
      clockStop();
    }
  };

  const clockStart = () => {
    if (currentTime > 0) {
      setClockIsRunning(true);
      updateTime();
    }
  };

  const clockStop = () => {
    clearTimeout(timeoutRef.current);

    if (currentTime === 0) {
      alarm.play();
      if (clockIsRunning) {
        const title = type === 'work' ? 'Well Done!' : 'Break time is over!';
        const message =
          type === 'work'
            ? 'You completed your pomodoro. Lets take a break now!'
            : 'Time to get back to work!';

        PushNotification.localNotification({
          title,
          message,
          vibrate: true,
          playSound: false,
        });
      }
    }

    setClockIsRunning(false);
  };

  const handleAddTask = task => {
    dispatch({
      type: 'ADD_TASK',
      payload: task,
    });
    setShowAddModal(false);
  };

  const setTime = time => {
    if (time === TIME) {
      setType('work');
    } else {
      setType('rest');
    }
    clockStop();
    alarm.stop();
    setCurrentTime(time);
  };

  return (
    <View style={styles.container}>
      <AddTaskModal
        visible={showAddModal}
        onAdd={handleAddTask}
        onClose={() => setShowAddModal(false)}
      />
      {showTaskList && (
        <TouchableWithoutFeedback
          style={[styles.overlay]}
          onPress={() => setShowTaskList(false)}>
          <View style={[styles.overlay]} />
        </TouchableWithoutFeedback>
      )}
      <TaskList visible={showTaskList} onClose={() => setShowTaskList(false)} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowTaskList(true)}>
          <Icon name="list" size={26} color={Colors.BLACK} />
        </TouchableOpacity>
        <Menu>
          <MenuTrigger>
            <View style={styles.triggerOptionsContainer}>
              <Icon name="ellipsis-v" size={26} color={Colors.BLACK} />
            </View>
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={styles.optionsContainer}>
            <MenuOption onSelect={() => setTime(TIME)}>
              <Text style={styles.optionText}>Work</Text>
            </MenuOption>
            <MenuOption onSelect={() => setTime(REST_TIME)}>
              <Text style={styles.optionText}>Rest</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      <View style={styles.content}>
        <Clock>{formatTime(currentTime)}</Clock>
        <View style={styles.containerButtons}>
          <ButtonsContainer
            clockIsRunning={clockIsRunning}
            onPlay={clockStart}
            onPause={clockStop}
            currentTime={currentTime}
            setWork={() => setTime(TIME)}
            setRest={() => setTime(REST_TIME)}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <AddButton onPress={() => setShowAddModal(true)} />
      </View>
    </View>
  );
};

export default ClockScreen;
