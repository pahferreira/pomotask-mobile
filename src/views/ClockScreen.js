import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles/ClockScreenStyle';
import { Colors } from '../theme/Theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

// Components
import ButtonsContainer from '../components/ButtonsContainer';
import Clock from '../components/Clock';
import AddButton from '../components/AddButton';
import AddTaskModal from '../components/AddTaskModal';

const TIME = 10;
const REST_TIME = 5;

const ClockScreen = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(TIME);
  const [clockIsRunning, setClockIsRunning] = useState(false);

  useEffect(() => {
    if (clockIsRunning && currentTime > 0) {
      setTimeout(updateTime, 1000);
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
      updateTime();
      setClockIsRunning(true);
    }
  };

  const clockStop = () => {
    setClockIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <AddTaskModal
        visible={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="list" size={22} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Clock>{formatTime(currentTime)}</Clock>
        <View style={styles.containerButtons}>
          <ButtonsContainer
            clockIsRunning={clockIsRunning}
            onPlay={clockStart}
            onPause={clockStop}
            onReset={() => setCurrentTime(TIME)}
            onRest={() => setCurrentTime(REST_TIME)}
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
