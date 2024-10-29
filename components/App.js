import { View } from 'react-native'
import React, { useState } from 'react'
import Todolist from './Todolist'
import Todoform from './Todoform'

const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  return (
    <View>
      <Todolist tasks={tasks}/>
      <Todoform/>
    </View>
  );
};

export default App;
