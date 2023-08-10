import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const Hooks = () => {

    const [state, setState] = useState(0);
    handleclick=()=>{
        setState(state+1);
    }
    const [state2, setState2] = useState(0);
    handleclick2=()=>{
        setState2(state2+1);
    }

    useEffect(()=>{
        return () => {
            console.log('clg')
        }
    },[state]) ;


  return (
    <View style={styles.container}>
      
        <Text style={{fontSize:50, color:'black',paddingBottom:50}}>{state}</Text>
        <Text style={{fontSize:50, color:'black',paddingBottom:50}}>{state2}</Text>

      <TouchableOpacity style={styles.button} onPress={handleclick}>
            <Text style={styles.buttontext}>Click Me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleclick2}>
            <Text style={styles.buttontext}>Click Me2</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Hooks

const styles = StyleSheet.create({
    container:{
        marginTop:150,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        
        backgroundColor:'blue',
        paddingHorizontal:20,
        paddingVertical:10,
        width:'80%',
        borderRadius:10,
        elevation:10,
        marginBottom:50

    },
    buttontext:{
        textAlign:'center',
        color:"white",
        fontWeight:'bold',
        fontSize:20,
    }
})