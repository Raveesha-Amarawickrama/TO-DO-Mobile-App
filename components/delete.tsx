import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from '../styles/componentStyles/delete.style';

const DeletePopup = ({ visible, onConfirm, onCancel }) => (
  <Modal transparent visible={visible} animationType="fade">
    <View style={styles.overlay}>
      <View style={styles.popup}>
        <Text style={styles.title}>Delete this task?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onConfirm} style={styles.yesButton}>
            <Text style={styles.yesText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCancel} style={styles.noButton}>
            <Text style={styles.noText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default DeletePopup;
