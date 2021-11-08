import React, {FC} from 'react'
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Texts } from '.'
import { COLORS, FONTS } from '../constants'

interface CategoryListsProps {
    indexNum?: number,
    category: any
}

const CategoryLists:FC<CategoryListsProps> = (props:CategoryListsProps) => {
    const { category, indexNum } = props
    
    return (
        <TouchableOpacity 
        activeOpacity={0.7}
        onPress={() => console.log(category.id)}
        style={styles.categoryCard}
        >   
                <View style={styles.categoryTitle}>
                <Texts content={category.name} font={FONTS.bold} size={12}/>
                </View>
                <Image 
                source={{uri: category.icons[0].url}}
                style={styles.categoryImage}
                />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryCard: {
        width: '45%',
        margin: 10,
        height: 100,
        overflow: 'hidden',
        backgroundColor: COLORS.lightBlack
    },
    categoryTitle:{
        width: 90,
        zIndex: 10,
        left: 10,
        top: 10
    },
    categoryImage:{
        width: 120,
        height: 150,
        position: 'absolute',
        borderRadius: 10,
        right: -20,
        bottom: -30,
        transform:[{rotateX:"5deg"},{rotateZ:"10deg"}]
    }
})

export default CategoryLists
