import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Grid = () => {

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
      <Text style={{fontSize:30}}>Grid with dynamin data</Text>
      {/* Static */}
      {/* <View style={styles.grid}>
          <Text style={styles.item}>Nikhil</Text>
          <Text style={styles.item}>Nikhil</Text>
          <Text style={styles.item}>Nikhil</Text>
          <Text style={styles.item}>Nikhil</Text>
          <Text style={styles.item}>Nikhil</Text>
          <Text style={styles.item}>Nikhil</Text>
          <Text style={styles.item}>Nikhil</Text>
      </View> */}

      <View style={styles.grid}>
        {
          user.map((item) =><Text style={styles.item}>{item.name}</Text>)
        }
      </View>
    </View>
  )
}

export default Grid

const styles = StyleSheet.create({
  grid:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  item:{
    fontSize:30,
    backgroundColor:'red',
    color:'#fff',
    margin:5,
    padding:5,
    height:120,
    width:120,
    textAlign:'center',
    textAlignVertical:'center'

  }

})