import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ListApi = () => {
    
    const [data, setData] = useState([]);

    const getApiData = async() =>{
        const url = 'https://jsonplaceholder.typicode.com/posts/';
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }
    useEffect(()=>{
        getApiData()
    },[])
  return (
    
        
   
      <ScrollView>
      <Text style={{fontSize:30,textAlign:'center'}}>Api Call with List</Text>
      {
        data.length ?         
             data.map((item)=>
                <View style={styles.template}>
                    <Text style={styles.idtext}>Id :{item.id}</Text>
                    <Text style={styles.text}>title :{item.title}</Text>
                    <Text style={styles.text}>body :{item.body}</Text>
                </View> )
        : null
      }
      </ScrollView>
     
  )
}

export default ListApi

const styles = StyleSheet.create({
    template:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        marginBottom:10,
        margin:10
    },
    idtext:{
        backgroundColor:'#ddd',
        fontSize:20
        
    },
    text:{
        fontSize:20
    }
})