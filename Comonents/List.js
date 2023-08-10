import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


// In Flatlist and list we can use only Normal Array or Array of Object in the form of data
const List = () => {

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
       
    ]
  return (
    <View>
        <Text style={{fontSize:30,color:'black'}}>FlatList in React Native</Text>
      <FlatList
      data={user}
      renderItem={({item})=><Text style={styles.text}>{item.name}</Text>}
      keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default List

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