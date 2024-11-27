import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      { children }
      <Footer/>
    </View>
  )
}

export default MainLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})
