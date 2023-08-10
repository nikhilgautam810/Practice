import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const RadioButton = () => {

    const [selectedRadio, setSelectedRadio] = useState(1)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
            <View style={styles.radio}>
                {
                    selectedRadio === 1 ? <View style={styles.succes}></View> : null
                }
            </View>
            <Text style={styles.radiotext}>Radio Button 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
            <View style={styles.radio}>
                
                {
                    selectedRadio === 2 ? <View style={styles.succes}></View> : null
                }
               
            </View>
            <Text style={styles.radiotext}>Radio Button 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RadioButton

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