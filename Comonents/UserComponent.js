import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const UserComponent = (props) =>{
    const item = props.item;

    return(
        <View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
        </View>
    )
  }

export default UserComponent

const styles = StyleSheet.create({
    item:{
        fontSize:20,
        color:'orange',
        flex:1,
        margin:2,
        textAlign:'center',
        padding:5
        
    },
    box:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:'orange',
        margin:10,

    }
})