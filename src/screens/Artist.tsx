import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../constants'
import { Texts } from '../components'

const Artist = () => {
    return (
        <View style={styles.container}>
            <Texts size={15} font={FONTS.bold} content={'Artist'}/>
            <Texts size={12} font={FONTS.bold} content={'This will be the profile of your selected artist'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.backgroundColor
    }
})

export default Artist