import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const RNTextInput = () => {
const[name,setName] = useState("Anil")

  return (
    <View>
      <Text style={{fontSize:30}}>Text Input in React Native</Text>
      <Text style={{fontSize:30}}> {name}</Text>
      <TextInput
        placeholder='Enter your Name'
        style={styles.inputtext}
        value={name}
        onChangeText={(text)=>setName(text)}
      />

      <TouchableOpacity style={styles.button}
      onPress={()=>setName('')}>
        <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Change Name</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RNTextInput

const styles = StyleSheet.create({
  inputtext:{
    fontSize:18,
    color:'red',
    borderWidth:2,
    borderColor:'blue',
    margin:10,
    borderRadius:10,
    paddingLeft:20
  },
  button:{
    backgroundColor:'red',
    textAlign:'center',
    padding:10,
    marginHorizontal:10,
    borderRadius:10,
    alignItems:'center',
    elevation:10,
  }
})