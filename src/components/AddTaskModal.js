import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import i18n from '../i18n/i18n';
import { Colors } from '../theme/Theme';

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
            <TouchableOpacity onPress={onClose} style={styles.cancelContainer}>
              <Text style={styles.cancelText}>
                {i18n.t('tasks.addTaskForm.buttons.cancel').toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressAddTask}>
              <Text style={styles.buttonText}>
                {i18n.t('tasks.addTaskForm.buttons.add').toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLACK_TRANSPARENT,
  },
  header: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    justifyContent: 'space-around',
    backgroundColor: Colors.WHITE,
    borderRadius: 11,
    paddingHorizontal: '5%',
    width: '75%',
    height: 250,
  },
  footer: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: Colors.BLUE,
    fontFamily: 'IndieFlower',
  },
  input: {
    textAlignVertical: 'top',
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREEN,
    color: Colors.BLACK,
    borderRadius: 10,
  },
  cancelText: {
    color: Colors.RED,
    fontWeight: 'bold',
  },
  cancelContainer: {
    marginRight: 10,
  },
  buttonText: {
    color: Colors.BLUE,
    fontWeight: 'bold',
  },
});

export default AddTaskModal;
