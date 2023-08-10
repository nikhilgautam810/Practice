import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const DynamicRadioButton = () => {
const Button = [
    {
        id:1,
        skill:'PHP'
    },
    {
        id:2,
        skill:'SQL'
    },
    {
        id:3,
        skill:'PYTHON'
    },
    {
        id:4,
        skill:'JAVA'
    },
    {
        id:5,
        skill:'JAVA-SCRIPT'
    },
]
const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    
    <View style={styles.container}>
      {
        Button.map((item,index)=><TouchableOpacity 
        key={index}
        onPress={()=>setSelectedRadio(item.id)}>
        <View style={styles.radioWrapper}>
            <View style={styles.radio}>
                
                {
                    selectedRadio==item.id? <View style={styles.succes}></View> : null
                }
               
            </View>
            <Text style={styles.radiotext}>{item.skill}</Text>
        </View>
      </TouchableOpacity>)
      }
    </View>
  )
}

export default DynamicRadioButton

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    radio:{
        borderWidth:4,
        height:30,
        width:30,
        borderRadius:15,
        margin:10,
        borderColor:'blue'

    },
    radioWrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    radiotext:{
        fontSize:24,
        color:'blue'
    },
    succes:{
        backgroundColor:'blue',
        height:16,
        width:16,
        borderRadius:8,
        margin:3
    }
})