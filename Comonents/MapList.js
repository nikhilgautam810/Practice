import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MapList = () => {
    const user = [
        {
            id:1,
            name:'Nikhil'
        },
        {
            id:2,
            name:'Vaibhav'
        },
        {
            id:3,
            name:'Piyush'
        },
        {
            id:4,
            name:'Shashank'
        },
        {
            id:5,
            name:'Prince'
        },
        {
            id:6,
            name:'Prashant'
        },
        {
            id:7,
            name:'Rahul'
        },
        {
            id:8,
            name:'Ujjwal'
        },
        {
            id:9,
            name:'Abhi'
        },
        {
            id:10,
            name:'Abhilash'
        },
        {
            id:10,
            name:'Abhilash'
        },
        {
            id:14,
            name:'kailash'
        },
        {
            id:14,
            name:'kailash'
        },
       
    ]

  return (
    <View>
      <Text style={{fontSize:30}}>List With Map In React Native</Text>
      <ScrollView style={{marginBottom:170}}>
      {
        user.map((item)=><Text style={styles.text}>{item.name}</Text>)
      }
      </ScrollView>
    </View>
  )
}

export default MapList

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        backgroundColor:'red',
        padding:10,
        margin:10,
        borderRadius:10,
        color:'white',
        elevation:10,
        textAlign:'center'
        

    }
})