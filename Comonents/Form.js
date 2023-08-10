import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Form = () => {
const[name,setName] = useState("")
const[email,setEmail] = useState("")
const[password,setPassword] = useState("")
const [display, setDisplay] = useState(false);

const resetFormData =()=>{
    setDisplay(false);
    setName("");
    setPassword("");
    setEmail("")
}

  return (
    <View>
        <Text style={{fontSize:30}}>Form in React Native</Text>
      <TextInput 
      style={styles.inputtext}
      placeholder='Enter Your Name'
      value={name}
      onChangeText={(text)=>setName(text)}
      />
      <TextInput 
       style={styles.inputtext}
      placeholder='Enter Your Email'
      value={email}
      onChangeText={(text)=>setEmail(text)}
      />
      <TextInput 
       style={styles.inputtext}
      placeholder='Enter Your Password'
      value={password}
      onChangeText={(text)=>setPassword(text)}
      secureTextEntry={true}
      />
      <TouchableOpacity style={styles.btn}  onPress={()=>setDisplay(true)}>
        <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Print Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={resetFormData}>
        <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Clear Details</Text>
      </TouchableOpacity>

      
       <View>
        {
            display ?
            <View>
                <Text style={{fontSize:15}}>User name is : {name}</Text>
                <Text style={{fontSize:15}}>User email is : {email}</Text>
                <Text style={{fontSize:15}}>User password is : {password}</Text>
            </View> : null
        }
       </View>
      
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    inputtext:{
        fontSize:18,
        // borderWidth:2,
        elevation:10,
        paddingVertical:14,
        backgroundColor:'white',
        margin:10,
        borderRadius:10,
        borderColor:'blue',
        paddingLeft:20
        
    },
    btn:{
        backgroundColor:'red',
        paddingVertical:10,
        alignItems:'center',
        marginHorizontal:10,
        borderRadius:10,
        marginVertical:10

    }
})