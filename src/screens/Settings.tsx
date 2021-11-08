import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { BackButton, ConcealedHeader, Texts, VerticalSpacer } from '../components'
import { COLORS, FONTS } from '../constants'

const Settings = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row'
            }}>
               <BackButton title={'Settings'}/>
            </View>
            <VerticalSpacer size={5}/>
            <View style={{
                marginHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
                }}>
                <Image 
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UUD5_QfP3HFFTjOPEorII-S6WK-0Ux7GUQ&usqp=CAU'}}
                style={{
                    width: 75,
                    height: 75,
                    borderRadius: 50
                }}
                />
                <View>
                <Texts marginH={20} content={'Ruben James Dela Cruz'} size={20} font={FONTS.bold}/>
                <Texts marginH={20} content={'Edit Profile'} size={15} font={FONTS.regular}/>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.backgroundColor
    }
})

export default Settings
