"use client"

import { StyleSheet, TextInput, Button, View } from 'react-native'
import React, { useState } from 'react'

const TodoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  
  const createTask = () => {
    if (taskText) {
      addTask(taskText);
      setTaskText('');
    }
  }

  return (
    <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={(text) => setTaskText(text)}
            value={taskText}
        />
        <Button title="Add" onPress={createTask} />
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        color: "#cfcfcf",
        minWidth: "50%"
      },
});
