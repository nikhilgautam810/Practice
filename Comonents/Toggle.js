import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Toggle = () => {

    const[show, setShow] = useState(true)

  return (
    <View>
      <Text style={{fontSize:30,textAlign:'center',color:'black'}}>Toggle Component</Text>
      <Button title='Unmount Toggle' onPress={()=>setShow(!show)}/>
     {
        show? <User/> : null
     }
     </View>
  )
}

 const User = () =>{
    return(
        <View style={{alignItems:'center',margin:30}}>

     <Text style={{fontSize:30, color:'white',
    backgroundColor:'red',
    height:120,
    width:120,
    textAlignVertical:'center',
    textAlign:'center'}}>Toggle</Text>
    </View>
    )
 }

export default Toggle

const styles = StyleSheet.create({})