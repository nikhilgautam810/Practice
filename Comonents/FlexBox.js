import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.innerbox}></View>
        <View style={styles.innerbox2}></View>
        <View style={styles.innerbox3}></View></View>
      <View style={styles.box2}><Text>Box1</Text></View>
      <View style={styles.box3}><Text>Box1</Text></View>
    </View>
  )
}

export default FlexBox

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        
    },
    box1:{
        flex:2,
        backgroundColor:'blue',
        flexDirection:'row'
    },
    box2:{
        flex:1,
        backgroundColor:'orange'
    },
    box3:{
        flex:1,
        backgroundColor:'brown'
    },
    innerbox:{
        flex:1,
        backgroundColor:'green',
        margin:10
    },
    innerbox2:{
        flex:1,
        backgroundColor:'green',
        margin:10
    },
    innerbox3:{
        flex:1,
        backgroundColor:'green',
        margin:10
    }
})