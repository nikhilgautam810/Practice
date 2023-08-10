import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

const Activityindicator = () => {
    const [loader,setLoader] = useState(false)
    const showLoader = () => {
        setLoader(true)
        setTimeout(()=>{
            setLoader(false)
        },5000)
    }
    
  return (
    <View style={styles.container}>
      {/* <Text>ActivityIndicator</Text> */}
      <ActivityIndicator size={100} color={'red'} animating={loader}/>
      <Button title='Show Indicator' onPress={showLoader}/>
    </View>
  )
}

export default Activityindicator

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})