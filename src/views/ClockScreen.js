import React, { useState, useEffect, useRef } from 'react';
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

// Components
import ButtonsContainer from '../components/ButtonsContainer';
import Clock from '../components/Clock';
import AddButton from '../components/AddButton';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';

const TIME = 10;
const REST_TIME = 5;

const ClockScreen = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);
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
    setClockIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <AddTaskModal
        visible={showAddModal}
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
          <Icon name="list" size={22} color={Colors.BLACK} />
        </TouchableOpacity>
        <Menu>
          <MenuTrigger>
            <Icon name="ellipsis-v" size={22} color={Colors.BLACK} />
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={styles.optionsContainer}>
            <MenuOption
              onSelect={() => {
                clockStop();
                setCurrentTime(TIME);
              }}>
              <Text style={styles.optionText}>Work</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => {
                clockStop();
                setCurrentTime(REST_TIME);
              }}>
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
