import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectUnmount = () => {
const [show, setShow] = useState(true)

  return (
    <View>
      <Text style={{fontSize:30,color:'black'}}>UseEffect for Unmount Component</Text>
      <Button title='Unmount toggle' onPress={()=>setShow(!show)}/>
     {
        show ?  <Student/> : null
     }
    </View>
  )
}
const Student = () =>{

let timer = setInterval(()=>{
    console.warn('set Interval')
}, 2000)

    useEffect(()=>{
       return()=> clearInterval(timer)
    })
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

export default UseEffectUnmount

const styles = StyleSheet.create({})