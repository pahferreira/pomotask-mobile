import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles/ClockScreenStyle';
import { Colors } from '../theme/Theme';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Context from '../context/Context';
import Sound from 'react-native-sound';
import PushNotification from 'react-native-push-notification';
import i18n from '../i18n/i18n';
import BackgroundTimer from 'react-native-background-timer';

// Components
import ActionButton from '../components/ActionButton';
import Clock from '../components/Clock';
import Button from '../components/Button';
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
  const interval = useRef();

  useEffect(() => {
    if (currentTime === 0) {
      clockStop();
    }
  }, [clockStop, currentTime]);

  useEffect(() => {
    interval.current = BackgroundTimer.setInterval(() => {
      if (clockIsRunning) {
        setCurrentTime(s => {
          if (s > 0) {
            return s - 1;
          }
          return 0;
        });
      }
    }, 1000);
    return () => {
      BackgroundTimer.clearInterval(interval.current);
    };
  }, [clockIsRunning]);

  const formatTime = time => {
    let minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    let seconds = (time - minutes * 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  const clockStart = async () => {
    if (currentTime > 0) {
      setClockIsRunning(true);
    }
  };

  const clockPause = () => {
    setClockIsRunning(false);
  };

  const clockStop = useCallback(() => {
    BackgroundTimer.clearInterval(interval.current);
    alarm.play();
    if (clockIsRunning) {
      const title =
        type === 'work'
          ? i18n.t('notifications.work.title')
          : i18n.t('notifications.rest.title');
      const message =
        type === 'work'
          ? i18n.t('notifications.work.message')
          : i18n.t('notifications.rest.message');

      PushNotification.localNotification({
        title,
        message,
        vibrate: true,
        playSound: false,
      });
      setClockIsRunning(false);
    }
  }, [clockIsRunning, type]);

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
    setClockIsRunning(false);
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
          <Icon name="list" size={30} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowAddModal(true)}>
          <Icon name="add" size={30} color={Colors.BLUE} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Clock>{formatTime(currentTime)}</Clock>
        <View style={styles.containerButtons}>
          <ActionButton
            clockIsRunning={clockIsRunning}
            onPressPlay={clockStart}
            onPressPause={clockPause}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Button name={i18n.t('buttons.work')} onPress={() => setTime(TIME)} />
        <Button
          name={i18n.t('buttons.rest')}
          onPress={() => setTime(REST_TIME)}
        />
      </View>
    </View>
  );
};

export default ClockScreen;
