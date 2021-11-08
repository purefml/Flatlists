import React, {FC} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/core'
import { Texts } from '.'

interface BackButtonProps {
    title?: string
}


const BackButton:FC<BackButtonProps> = (props:BackButtonProps) => {
    const navigation = useNavigation()
    const { title } = props 
    
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={{
                width: SIZES.radius * 2.5
            }}
            onPress={() => navigation.goBack()}>
            <Icon
            name='arrow-left'
            size={25}
            color={COLORS.white}
            style={{
                top: SIZES.radius * 3,
                left: 20,
            }}
            />
            </TouchableOpacity>
            {
             title && 
            <View style={{
                marginLeft: SIZES.radius * 6,
                top: 5
            }}>
             <Texts marginV={2} content={title} size={20} font={FONTS.bold}/>
            </View>
            }
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: SIZES.height / 8,
        backgroundColor: COLORS.transparent,
        justifyContent:'center',
    }
})

export default BackButton
