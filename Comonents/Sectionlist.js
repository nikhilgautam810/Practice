import { StyleSheet, Text, View, SectionList } from 'react-native'
import React from 'react'

const user = [
    {
        id:1,
        name:'nikhil',
        data:['php','java','react native'] // if we are creating an array inside an array we have to use a name as data
    },
    {
        id:2,
        name:'ujjwal',
        data:['java', 'java script', 'react js']
    },
    {
        id:3,
        name:'shashank',
        data:['java', 'java script', 'react js']
    },
    {
        id:4,
        name:'Abhilash',
        data:['java', 'java script', 'react js']
    },
    {
        id:5,
        name:'ujjwal',
        data:['java', 'java script', 'Angular']
    }
]

const Sectionlist = () => {
  return (
    <View>
      <Text style={{fontSize:30,
        color:'black',
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign:'center'}}>Section List</Text>

        <SectionList
        sections={user}
        renderItem={({item})=><Text style={{fontSize:30, marginLeft:20}}>{item}</Text>}
        renderSectionHeader={({section:{name}})=>(
            <Text style={{fontSize:30,color:'red'}}>{name}</Text>
  )}
        />

    </View>
  )
}

export default Sectionlist

const styles = StyleSheet.create({})