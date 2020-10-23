import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons';
const AddButton = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="camera" color={colors.red} size={30} /> 
        </View>
    )
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        height:60,
        width:60,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        bottom:25
    }
})
