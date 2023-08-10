import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Api = () => {

    const [data, setData] = useState(undefined)

    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const getApiData = async() =>{
        const response = await fetch(url);
        const result = await response.json();
        setData(result)
    }
    useEffect(()=>{
        getApiData();
    },[])

  return (
    <View>
      <Text style={{fontSize:30,textAlign:'center'}}>Api Call</Text>
      {
        data ? 
        <View>
        <Text style={{fontSize:30}}>{data.id}</Text>
        <Text style={{fontSize:25}}>{data.title}</Text>
        <Text style={{fontSize:20}}>{data.body}</Text>
      </View> : null
      }
    </View>
  )
}

export default Api

const styles = StyleSheet.create({})