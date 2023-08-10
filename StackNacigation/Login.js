import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = (props) => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
    <Text style={{fontSize:30}}>
        Login Screen
    </Text>
    <Button title='Home Screen' onPress={()=>props.navigation.navigate('Home')}/>
</View>
  )
}

export default Login

const styles = StyleSheet.create({})


