import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'


const Webview = () => {
  return (
   
      <WebView source={{uri:'https://swatchseries.is/home'}}/>
    
  )
}

export default Webview

const styles = StyleSheet.create({})