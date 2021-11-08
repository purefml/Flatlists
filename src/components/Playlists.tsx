import React, {FC} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { Texts } from '.'

interface PlaylistsProps {
    tracks: any
    trackCount: any
}

const Playlists:FC<PlaylistsProps> = (props:PlaylistsProps) => {
    const { tracks, trackCount } = props;
    return (
        <View style={styles.container}>
               <View>
                 <TouchableOpacity
                   onPress={() => console.log('Top release')}
                   activeOpacity={0.7}
                   style={styles.infoContainer}>
                   <View style={styles.infoHolder}>
                     <Texts
                       content={trackCount < 9 ? `0${trackCount + 1}` : trackCount + 1}
                       size={14}
                       font={FONTS.bold}
                     />
                   </View>
                   <Image
                     source={{uri: tracks.track.album.images[0].url}}
                     resizeMode="cover"
                     style={styles.img}
                   />
                   <View style={styles.info}>
                   <Texts content={tracks.track.album.name} size={13} font={FONTS.bold} />
                     <Texts content={tracks.track.album.artists[0].name} size={10} font={FONTS.bold} />
                   </View>
                 </TouchableOpacity>
               </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black
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
})

export default Playlists
