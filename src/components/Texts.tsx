import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../constants'

interface TextsProps {
    content: string,
    textColor?: string,
    size: number,
    font: string,

    marginH?: number,
    marginV?: number,
    align?: string, 
    textWidth?: number,
}

const Texts:FC<TextsProps> = (props:TextsProps) => {
    const { content, textColor, size, font, marginH, marginV, align, textWidth } = props;
    return (
        <View style={{
            width: textWidth && textWidth
        }}>
            <Text style={{
                color: textColor ? textColor : COLORS.white,
                fontSize: size,
                fontFamily: font,
                marginHorizontal: marginH ? marginH : 0,
                marginVertical: marginV ? marginV : 0,
                textAlign: align ? align : 'left'
            }}>{content}</Text>
        </View>
    )
}

export default Texts
