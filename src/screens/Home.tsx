import React from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Texts, LatestLists, HomeHeader} from '../components';
import {COLORS, FONTS, SIZES} from '../constants';
import {TopRelease} from '../../utils/dummyData';


const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={TopRelease}
        ListHeaderComponent={ 
          <View>
            {<HomeHeader />}
            {<LatestLists />}
            <Texts
              size={15}
              content={'Top Release'}
              font={FONTS.bold}
              marginH={10}
              marginV={15}
            />
          </View>
        }
        keyExtractor={(key: any) => key.id}
        renderItem={({item, index}: any) => (
          <View>
            <TouchableOpacity
              onPress={() => console.log('Top release')}
              activeOpacity={0.7}
              style={styles.infoContainer}>
              <View style={styles.infoHolder}>
                <Texts
                  content={index < 9 ? `0${index + 1}` : index + 1}
                  size={14}
                  font={FONTS.bold}
                />
              </View>
              <Image
                source={{uri: item.images[0].url}}
                resizeMode="cover"
                style={styles.img}
              />
              <View style={styles.info}>
                <Texts content={item.name} size={14} font={FONTS.bold} />
                <Texts
                  content={item.artists[0].name}
                  size={13}
                  font={FONTS.regular}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={<View style={{marginBottom: 10}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
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
});

export default Home;
