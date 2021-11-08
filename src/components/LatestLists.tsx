import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {newRelease} from '../../utils/dummyData';
import {COLORS, FONTS, SIZES} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {Texts} from '.';

const LatestLists = () => {
  return (
    <View>
      <View style={styles.header}>
        <Texts
          marginH={10}
          marginV={15}
          content={'New Albums'}
          size={15}
          font={FONTS.bold}
        />
        <Texts
          marginH={10}
          marginV={15}
          textColor={COLORS.gray}
          content={'See all'}
          size={14}
          font={FONTS.regular}
        />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={newRelease}
        keyExtractor={(item): any => item.id}
        renderItem={({item, index}: any) => (
          <View
            style={[
              styles.listsContainer,
              {
                marginLeft: index === 0 ? 10 : 15,
                marginRight: index === 4 ? 10 : 0,
              },
            ]}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => console.log('New release')}
              style={styles.lists}>
              <ImageBackground
                source={{uri: item.images[0].url}}
                resizeMode={'cover'}
                style={styles.imageBg}>
                <View style={styles.albumInfo}>
                  <Texts
                    size={15}
                    font={FONTS.bold}
                    content={
                      item.name.length > 10
                        ? `${item.name.substring(0, 25)}...`
                        : item.name
                    }
                  />
                  <Texts
                    size={12}
                    font={FONTS.regular}
                    content={item.artists[0].name}
                  />
                </View>
                <LinearGradient
                  style={{height: 170}}
                  colors={[COLORS.transparent, COLORS.black]}
                />
              </ImageBackground>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listsContainer: {
    paddingVertical: 5,
  },
  lists: {
    height: 150,
    width: 150,
    elevation: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBg: {
    width: 250,
    height: 200,
    borderRadius: SIZES.radius,
  },
  albumInfo: {
    width: 130,
    left: 10,
    top: 70,
    position: 'absolute',
    zIndex: 999,
  },
});

export default LatestLists;
