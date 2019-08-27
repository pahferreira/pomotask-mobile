import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles/ClockScreenStyle';
import { Colors } from '../theme/Theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

// Components
import ActionButton from '../components/ActionButton';
import Clock from '../components/Clock';
import AddButton from '../components/AddButton';
import AddTaskModal from '../components/AddTaskModal';

const ClockScreen = () => {
  const [showAddModal, setShowAddModal] = useState(false);
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
        <Clock />
        <View style={styles.containerButtons}>
          <ActionButton name="play" icon="play" color={Colors.GREEN} />
          <ActionButton name="pause" icon="pause" color={Colors.RED} />
          <ActionButton name="reset" icon="refresh" color={Colors.BLUE} />
        </View>
      </View>
      <View style={styles.footer}>
        <AddButton onPress={() => setShowAddModal(true)} />
      </View>
    </View>
  );
};

export default ClockScreen;
