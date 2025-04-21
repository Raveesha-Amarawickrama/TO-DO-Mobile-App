import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/componentStyles/TaskItem.style';

const TaskItem = ({ task, onDelete, onToggleComplete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const completedStyle = task.completed
    ? { textDecorationLine: 'line-through', opacity: 0.5 }
    : {};

  return (
    <View>
      <TouchableOpacity onPress={() => setShowEdit(!showEdit)} activeOpacity={1}>
        <View style={styles.taskBox}>
          <View style={styles.taskContent}>
            <TouchableOpacity style={styles.checkBox} onPress={() => onToggleComplete(task.id)}>
              <Text style={styles.checkText}>{task.completed ? '✓' : ''}</Text>
            </TouchableOpacity>

            <View style={styles.taskDetails}>
              <Text style={[styles.taskTitle, completedStyle]}>{task.title}</Text>
              <Text style={[styles.taskAbout, completedStyle]}>{task.about}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {showEdit && (
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.editBox} onPress={() => onEdit(task)}>
            <Image source={require('../assets/Edit.png')} style={styles.editImage} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeBoxOutside} onPress={() => onDelete(task.id)}>
            <Text style={styles.closeText}>x</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TaskItem;
