import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Modalstatic = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <View style={styles.container}>

            <Modal transparent={true} 
                visible={showModal}
                animationType='slide'>
                <View style={styles.centeredView}>
                    <View style={styles.modalview}>
                        <Text style={styles.modaltext}>Static Modal</Text>
                        <Button title='Close Modal' onPress={()=>setShowModal(false)}/>
                    </View>
                </View>
            </Modal>

            <View style={styles.Button}> 
                <Button title='Show Button' onPress={()=>setShowModal(true)}/>
            </View>
        </View>
    )
}

export default Modalstatic

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Button: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalview: {
        backgroundColor: '#fff',
        padding: 40,
        borderRadius:20,
        elevation:10,
        shadowColor:'black',
       
        

    },
    modaltext: {
        fontSize: 30,
        color: 'black',
        marginBottom:20
    }
})