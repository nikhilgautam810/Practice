import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Hooks from './Comonents/Hooks'
import Style from './Comonents/Style'
import TextInput from './Comonents/RNTextInput'
import Form from './Comonents/Form'
import List from './Comonents/List'
import MapList from './Comonents/MapList'
import ListMap from './Comonents/Grid'
import ComponentWithFlatList from './Comonents/ComponentWithFlatList'
import Sectionlist from './Comonents/Sectionlist'
import LifeCycle from './Comonents/LifeCycle'
import Toggle from './Comonents/Toggle'
import UseEffectUnmount from './Comonents/UseEffectUnmount'
import FlexBox from './Comonents/FlexBox'
import RadioButton from './Comonents/RadioButton'
import DynamicRadioButton from './Comonents/DynamicRadioButton'
import ActivityIndicator from './Comonents/Activityindicator'
import Modalstatic from './Comonents/Modalstatic'
import Statusbar from './Comonents/Statusbar'
import Webview from './Comonents/Webview'
import CustomModal from './Comonents/CustomModal'
import ScreenNavigation from './StackNacigation/ScreenNavigation'
import ScreenTabNavigation from './Tabnavigation/ScreenTabNavigation'
import TopTabNavigation from './Tabnavigation/TopTabNavigation';
import Api from './API/Api'
import ListApi from './API/ListApi'
import Asyncstorage from './Comonents/Asyncstorage'
const App = () => {

  
  return (
     
     <View  style={styles.container} >
     {/* <Hooks/> */}
     {/* <Style/> */}
     {/* <TextInput/> */}
     {/* <Form/> */}
     {/* <List/> */}
     {/* <MapList/> */}
     {/* <ListMap/> */}
     {/* <ComponentWithFlatList/> */}
     {/* <Sectionlist/> */}
     {/* <LifeCycle/> */}
     {/* <Toggle/> */}

     {/* <UseEffectUnmount/> */}
     {/* <FlexBox /> */}
     {/* <RadioButton/> */}
     {/* <DynamicRadioButton/> */}
     {/* <ActivityIndicator/> */}
     {/* <Modalstatic/> */}
     {/* <Statusbar/> */}
     {/* <Webview/> */}
     {/* <CustomModal/> */}
     {/* <ScreenNavigation/> */}
     {/* <ScreenTabNavigation/> */}
     {/* <TopTabNavigation/> */}
     {/* <Api/> */}
     {/* <ListApi/> */}
     <Asyncstorage/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      flex:1,
  }
})

export default App