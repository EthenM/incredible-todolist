import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Todolist from './components/Todolist';
import TodoForm from './components/Todoform';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';

const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  // const Stack = createStackNavigator();
  
  const addTask = (taskText) => {
    setTasks([...tasks, taskText])
  }


  return (
    <NavigationIndependentTree>
        <NavigationContainer>
          
          {/* todolist code */}
          
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default App;
