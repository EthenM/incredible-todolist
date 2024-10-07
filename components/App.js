import { View, Text } from 'react-native'
import React from 'react'
import Todolist from './Todolist'
import Todoform from './Todoform'

const App = () => {
  return (
    <View>
      <Todolist/>
      <Todoform/>
    </View>
  )
}

export default App
