import React, {FC} from 'react'
import { View } from 'react-native'

interface HSpacerProps {
    size: number
}

const HorizontalSpacer:FC<HSpacerProps> = (props:HSpacerProps) => {
    const { size } = props;
    return (
        <View 
        style={{
            marginHorizontal: size
        }}
        />
    )
}

export default HorizontalSpacer
