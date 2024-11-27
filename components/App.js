import { View } from 'react-native'
import React, { useState } from 'react'
import Todolist from './Todolist'
import TodoForm from './Todoform'

const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText])
  }


  return (
    <View>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Todolist tasks={tasks}/>
      </View>
      <TodoForm addTask={addTask}/>
    </View>
  );
};

export default App;
