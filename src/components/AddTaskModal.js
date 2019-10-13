import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles/AddTaskModalStyle';
import { Colors } from '../theme/Theme';
import i18n from '../i18n/i18n';

// Component
import ActionButton from '../components/ActionButton';

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
            <ActionButton
              name={i18n.t('tasks.addTaskForm.button')}
              color={Colors.GREEN}
              onPress={onPressAddTask}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddTaskModal;
