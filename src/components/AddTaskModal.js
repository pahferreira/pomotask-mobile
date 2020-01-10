import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/AddTaskModalStyle';
import i18n from '../i18n/i18n';

const AddTaskModal = props => {
  const [task, setTask] = useState('');
  const { visible, onClose, onAdd } = props;

  const onPressAddTask = () => {
    const newTask = {
      name: task,
      done: false,
    };
    onAdd(newTask);
  };
  return (
    <Modal
      style={styles.modalBackground}
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
      animationType="fade">
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {i18n.t('tasks.addTaskForm.title')}
            </Text>
          </View>
          <TextInput
            placeholder={i18n.t('tasks.addTaskForm.placeholder')}
            style={styles.input}
            onChangeText={e => setTask(e)}
          />
          <View style={styles.footer}>
            <TouchableOpacity onPress={onPressAddTask}>
              <Text style={styles.buttonText}>
                {i18n.t('tasks.addTaskForm.button').toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddTaskModal;
