import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { ConcealedHeader, Texts, SearchBar, CategoryLists, VerticalSpacer } from '../components'
import { COLORS, FONTS } from '../constants'
import { Categories } from '../../utils/categories'

const Search = () => {
    return (
        <View style={styles.container}>
            <ConcealedHeader />
            <FlatList 
            data={Categories}
            showsVerticalScrollIndicator={false}
            key={'#'}
            numColumns={2}
            ListHeaderComponent={
            <View>      
            <Texts font={FONTS.bold} marginV={15} marginH={20} size={25} content={'Search'}/>
            <SearchBar />
            <VerticalSpacer size={5}/>
            </View>      
            }
            keyExtractor={(key:any)=> '#' + key.id}
            renderItem={({item, index}:any) => <CategoryLists category={item} indexNum={index}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black
    }
})

export default Search
