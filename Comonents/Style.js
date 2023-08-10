import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Style = () => {
  return (
    <View>
      <Text style={styles.text}>Style In React Native</Text>
      <Text style={styles.text}>Style In React Native</Text>
      <Text style={styles.text}>Style In React Native</Text>
      <Text style={styles.text}>Style In React Native</Text>
    </View>
  )
}

export default Style

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        color:'red',
        backgroundColor:'lightblue',
        marginBottom:10,
        padding:10,
        borderRadius:10,
        height:100,
        textAlignVertical:'center',
        textAlign:'center',
        borderWidth:20,
        borderColor:'red'

    }
})