import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CustomModal = () => {
    const [showModal, setShowModal] = useState(false)
    return (
       
         <View style={styles.container}>
            
            {
                showModal ?
                    <View style={styles.modal}>
                        <View style={styles.body}>
                            <Text style={styles.text}>Hey Im Open</Text>
                            <Button title='Close' onPress={() => setShowModal(false)} />
                        </View>
                    </View> : null
            }
            <TouchableOpacity onPress={() => setShowModal(true)}>
                <Text style={styles.button}>Open Modal</Text>
            </TouchableOpacity>
        </View>
       
    )
}

export default CustomModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button: {
        padding: 10,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        backgroundColor: 'red'
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(50,50,50,.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        width: 250,
        borderRadius: 10,

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: 50
    },
    maintext:{
        textAlign:'center',
        justifyContent:'center'
    }
})