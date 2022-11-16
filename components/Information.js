import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Information = () => {
  return (
    <View style={styles.container}>
      <Text>React Native with Thai-Nichi</Text>
      <Text>Pornpawit Tangjittipairoj</Text>
      <Text>ID : 1913110043</Text>
      <Text>Major : IT</Text>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#ADD8E6",
      alignItems:"center",
      justifyContent:"center"
  
    }
  })