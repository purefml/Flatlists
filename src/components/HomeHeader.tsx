import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Texts, ConcealedHeader, HorizontalSpacer } from '.'
import { EditorPicks } from '../../utils/dummyData'
import { COLORS, FONTS, SIZES } from '../constants'

const HomeHeader = () => {
    const navigation:any = useNavigation()
    return (
        <View style={styles.headerStyle}>
        <ConcealedHeader />
        <View style={styles.container}> 
            <Texts marginV={10} font={FONTS.bold} size={18} content={'Find Your Best Music'}/>
            <View style={styles.headerBtns}>
            <View>
                <TouchableOpacity 
                activeOpacity={0.7}
                onPress={() => console.log('Notification')}
                >
                <Icon 
                name="bell-outline"
                size={25}
                color={COLORS.gray2}
                />
                <View style={styles.notificationIndicator}/>
                </TouchableOpacity>
            </View>
            <HorizontalSpacer size={10}/>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Settings')}
                >
             <Icon 
            name="cog-outline"
            size={25}
            color={COLORS.gray2}
            />
            </TouchableOpacity>
            </View>
        </View>
        <FlatList 
            data={EditorPicks}
            numColumns={2}
            key={'#'}
            keyExtractor={item => "#" + item.id}
            ListHeaderComponent={<View style={{marginTop: 10}}/>}
            ListFooterComponent={<View style={{marginBottom: 10}}/>}
            renderItem={({item}):any => 
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Playlist', { playlistData: item })}
            style={styles.listsContainer}
            >
                <Image 
                source={{uri: item.images[0].url}}
                resizeMode='contain'
                style={{
                    width: 45,
                    height: 45
                }}
                />
                <View style={styles.listsInfo}>
                 <Texts size={12} font={FONTS.bold} content={item.name}/>
                </View>
                </TouchableOpacity>
            }
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row', 
        alignItems:'center',
    },
    headerStyle:{
        paddingHorizontal: 10
    },
    searchContainer:{
        flexDirection: 'row', 
        alignItems:'center',
        marginTop: 20,
        backgroundColor: COLORS.gray3,
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 45
    },
    searchIcon:{
        width: 15,
        height: 15,
        marginHorizontal: 10,
        tintColor: COLORS.white
    },
    searchInput:{
        color: COLORS.white,
        width: SIZES.width * 0.6
    },
    headerBtns:{
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
    },
    notificationIndicator:{
        width: 8,
        height: 8,
        borderRadius: 10,
        position:'absolute',
        right: 2,
        top: 15,
        zIndex: 99,
        backgroundColor: COLORS.blue
    },
    listsContainer:{
        flexDirection: 'row',
        backgroundColor: '#1c1c1c',
        width: '45%',
        margin: 10,
        borderRadius: 5,
        overflow: 'hidden'
    },
    listsInfo:{
        justifyContent:'center',
        marginLeft: 10,
        width: 115
    }
})

export default HomeHeader
