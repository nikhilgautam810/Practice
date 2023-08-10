import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserComponent from './UserComponent';
const user = [
    {
        id:1,
        name:'Nikhil',
        email:'nikhil@gmail.com'
    },
    {
        id:2,
        name:'Vaibhav',
        email:'vaibhav@gmail.com'
    },
    {
        id:3,
        name:'Piyush',
        email:'piyush@gmail.com'
    },
    {
        id:4,
        name:'Shashank',
        email:'shashank@gmail.com'
    },
    {
        id:5,
        name:'Prince',
        email:'prince@gmail.com'
    },
    {
        id:6,
        name:'Prashant',
        email:'prashant@gmail.com'
    },
    {
        id:7,
        name:'Rahul',
        email:'rahul@gmail.com'
    },
    {
        id:8,
        name:'Ujjwal',
        email:'ujjwal@gmail.com'
    },
    {
        id:9,
        name:'Abhi',
        email:'abhi@gmail.com'
    },
    {
        id:10,
        name:'Abhilash',
        email:'abhilash@gmail.com'
    },
   
] 
const ComponentWithFlatList = () => {
  return (
    <View>
        <Text style={{fontSize:30,color:'black'}}>Component In FlatList</Text>
      <FlatList
        data={user}
        renderItem={({item})=><UserComponent item={item}/>}
      />
       
    </View> 
  )

  
}



export default ComponentWithFlatList

const styles = StyleSheet.create({
   
})