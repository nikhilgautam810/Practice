import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);

    useEffect(()=>{
        console.warn("Count updated", count);
    },[count])
    useEffect(()=>{
        console.warn("Data updated", data);
    },[data])
  return (
    <View>
      <Text style={{fontSize:30}}>LifeCycle in React native{count}</Text>
      <Button title='Update Count' onPress={()=>setCount(count+1)}/>
      <Button title='Update Data' onPress={()=>setData(data+1)}/>
      <User info={{count,data}}/>
    </View>
  )
}

const User=(props)=>{

    return(
        <View>
            <Text style={{fontSize:30}}>Count: {props.info.count}</Text>
            <Text style={{fontSize:30}}>Data: {props.info.data}</Text>
        </View>
    )
}

export default LifeCycle

const styles = StyleSheet.create({})