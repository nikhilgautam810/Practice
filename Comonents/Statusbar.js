import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Statusbar = () => {
    const [hide, setHide] = useState(false)
  return (
    <View style={styles.main}>
      <StatusBar
      barStyle={'dark-content'}
      backgroundColor={'white'}
      hidden={hide}
      
      />

      <Button title='Show StatusBar' onPress={()=>setHide(!hide)}/>

      </View>
  )
}

export default Statusbar

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})