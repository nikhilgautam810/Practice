import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Login from './Login';
import Home from './Home';

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigation = () => {
  return (
   <NavigationContainer>
    <TopTab.Navigator>
        <TopTab.Screen name='Login' component={Login}/>
        <TopTab.Screen name='Home' component={Home}/>
    </TopTab.Navigator>
   </NavigationContainer>
  )
}

export default TopTabNavigation

const styles = StyleSheet.create({})