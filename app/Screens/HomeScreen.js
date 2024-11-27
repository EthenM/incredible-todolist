import { View, Text, Button } from 'react-native'
import React from 'react'
import MainLayout from '../layouts/MainLayout'

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <Button title='Go to About' onPress={navigation.navigate('About')}/>
    </MainLayout>
  )
}

export default HomeScreen
