import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Texts, ConcealedHeader, VerticalSpacer } from '../components'
import { COLORS, FONTS, SIZES } from '../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LoadMoreDummy } from '../../utils/loadMoreDummy'

const Bookmarks = () => {
    return (
        <View style={styles.container}>
            <ConcealedHeader/>
            <Texts marginH={20} content={'Bookmarks'} size={20} font={FONTS.bold}/>
            <View style={styles.filterContainer}>
                <TextInput 
                placeholder={'Filter songs'} 
                placeholderTextColor={COLORS.white}
                style={styles.textInput}
                />
                <TouchableOpacity style={styles.filterButton}>
                    <Texts content={'Filter'} size={15} font={FONTS.regular}/>
                </TouchableOpacity>
                <VerticalSpacer size={10}/>
            </View>
            <FlatList 
                data={LoadMoreDummy}
                key={'#'}
                keyExtractor={(key: any, index: number) => key.added_at + index}
                renderItem={({item,index}:any) => 
                    <View style={styles.infoContainer}>
                    <View style={styles.infoHolder}>
                        <Texts
                        content={index < 9 ? `0${index + 1}` : index + 1}
                        size={14}
                        font={FONTS.bold}
                        />
                    </View>
                    <Image
                        source={{uri: item.track.album.images[0].url}}
                        resizeMode="cover"
                        style={styles.img}
                    />
                    <View style={styles.info}>
                    <Texts content={item.track.album.name} size={13} font={FONTS.bold} />
                    <Texts content={item.track.album.artists[0].name} size={10} font={FONTS.bold} />

                    <TouchableOpacity
                    onPress={() => console.log('Top release')}
                    activeOpacity={0.7}
                    style={styles.bookmarkButton}
                    >
                        <Icon 
                        name='heart'
                        size={20}
                        color={COLORS.white2}
                        />
                    </TouchableOpacity>

                    </View>
                </View>
                }
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.backgroundColor
    },
    img: {
        width: 65,
        height: 65,
        borderRadius: SIZES.radius,
      },
      info: {
        width: '75%',
        paddingHorizontal: 20,
        justifyContent: 'center',
      },
      infoHolder: {
        justifyContent: 'center',
        marginHorizontal: 10,
      },
      infoContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderRadius: SIZES.radius,
      },
      textInput:{
        backgroundColor:COLORS.gray,
        marginVertical: 20,
        borderRadius: 10,
        width: '70%',
        height: '50%',
        paddingHorizontal: 20,
        color: COLORS.white
      },
      filterButton:{
        backgroundColor:COLORS.green,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10
      },
      filterContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
      },
      bookmarkButton:{
        position:'absolute',
        right: 30
      }
})

export default Bookmarks
