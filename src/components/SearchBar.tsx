import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Icon
            name='magnify'
            color={COLORS.gray3}
            size={30}
            style={styles.icon}
          />
            <TextInput 
            placeholder='Artist, Categories, Song'
            placeholderTextColor={COLORS.gray3}
            style={styles.textInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    textInput:{
        fontFamily: FONTS.bold,
        paddingLeft: 50,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: COLORS.gray2,
        width: '100%'
    },
    icon:{
        position:'absolute',
        zIndex: 9,
        alignSelf: 'center',
        paddingLeft: 10
    }
})

export default SearchBar
