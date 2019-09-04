import React from 'react';
import { Modal, View, Text, TextInput } from 'react-native';
import styles from './styles/AddTaskModalStyle';
import { Colors } from '../theme/Theme';

// Component
import ActionButton from '../components/ActionButton';

const AddTaskModal = props => {
  const { visible, onClose } = props;
  return (
    <Modal
      style={styles.modalBackground}
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
      animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Add Task</Text>
          </View>
          <TextInput placeholder="Description..." style={styles.input} />
          <View style={styles.footer}>
            <ActionButton name="add" color={Colors.GREEN} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddTaskModal;
