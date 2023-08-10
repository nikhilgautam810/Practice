import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Login from './Login';


const Tab = createBottomTabNavigator();
const ScreenTabNavigation = () => {
  return (
   <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Login' component={Login}/>
        </Tab.Navigator>
   </NavigationContainer>
  )
}

export default ScreenTabNavigation

const styles = StyleSheet.create({})