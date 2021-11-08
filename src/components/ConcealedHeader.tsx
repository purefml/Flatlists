import React from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'


/* Due to our app having a translucent statusbar, we will be needing to 
    make a component that will act as a marginTop in order to push
    the contents of the app. 😎 */

const ConcealedHeader = () => {
    return (
        <View style={styles.container}/>
    )
}

const styles = StyleSheet.create({
    container:{
        height: SIZES.height / 12,
        backgroundColor: COLORS.backgroundColor
    }
})

export default ConcealedHeader
