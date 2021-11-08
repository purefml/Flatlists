import React, {FC, useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/core';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import Playlists from '../components/Playlists';
import {COLORS, FONTS, SIZES} from '../constants';
import {BackButton, Loader, Texts} from '../components';

/* Static Datas */
import {
  MorningMotivation,
  MorningClassical,
  SoftPopHits,
  HitRewinds,
  CoffeeAndPiano,
  WakeUpGently,
} from '../../utils/editorPicks';

/* Dummy Load More Data */
import {LoadMoreDummy} from '../../utils/loadMoreDummy'

interface PlaylistsProps {}


const PlayListsPage:FC<PlaylistsProps> = (props: PlaylistsProps) => {
  /* UseSTates */
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [playListTracks, setPlayListTracks] = useState<any>([]);

  /* Routes */
  const route: any = useRoute();
  const {name, description, images} = route.params.playlistData;

  useEffect(() => {
    /* assume that we have an api that will retrieve playlist data.
         but since we only have a local/static data we will just conditionally get them. 
         his is easier and better with API of course 😎 */
    getPlaylistData(name);
    setIsLoading(false);
  }, []);

  const getPlaylistData = (name: string) => {
    /* This switch case is not necessary when we have an API that handles the condition. 
         this is only for UI purposes. mockup as they say. 😏 */

    switch (name) {
      case 'Morning Motivation':
        return setPlayListTracks(MorningMotivation);
      case 'Soft Pop Hits':
        return setPlayListTracks(SoftPopHits);
      case 'Coffee and Piano':
        return setPlayListTracks(CoffeeAndPiano);
      case 'Hit Rewind':
        return setPlayListTracks(HitRewinds);
      case 'Morning Classical':
        return setPlayListTracks(MorningClassical);
      case 'Wake Up Gently':
        return setPlayListTracks(WakeUpGently);
      default:
        break;
    }
  };


  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <View>
            <BackButton />
            <FlatList
              data={playListTracks}
              keyExtractor={(key: any, index: number) => key.added_at + index}
              initialNumToRender={2}
              ListHeaderComponent={
                <View style={styles.listHeader}>
                  <Image
                    source={{uri: images[0].url}}
                    style={{
                      width: 250,
                      height: 250,
                    }}
                  />
                  <Texts
                    marginV={20}
                    content={name}
                    size={20}
                    font={FONTS.bold}
                  />
                  <Texts
                    textWidth={SIZES.width / 1.3}
                    align={'center'}
                    content={description}
                    size={12}
                    font={FONTS.regular}
                  />
                </View>
              }
              renderItem={({item, index}): any => (
                <Playlists trackCount={index} tracks={item} />
              )}
              ListFooterComponent={<View style={{marginBottom: 130}} />}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  listHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
});

export default PlayListsPage;
