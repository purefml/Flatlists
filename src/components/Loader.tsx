import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { COLORS } from '../constants'

const Loader = () => {
    return (
        <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.green}/>
     </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent:'center', 
        alignSelf:'center'
    }
})

export default Loader
