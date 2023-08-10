import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Home from './Home';

const Stack = createNativeStackNavigator();
const ScreenNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
            headerStyle:
            {backgroundColor:'red'},
            headerTintColor:'white',
            headerTitleAlign:'center',
            headerTitleStyle:{
                fontSize:30,
            }
        }}
        >
            <Stack.Screen name='Login' component={Login}
            options={{
                headerLeft:()=><Button title='left'/>,
                headerRight:()=><Right/>,
                headerTitle:'User Login',
                headerStyle:
                {backgroundColor:'red'},
                headerTintColor:'white',
                headerTitleAlign:'center',
                headerTitleStyle:{
                    fontSize:30,
                }
            }}
            />
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigation


const Right = (props) =>{
    return(
        <View>
            <Button title='Right'/>
        </View>
    )
}

const styles = StyleSheet.create({})