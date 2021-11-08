import React, {FC} from 'react'
import { View } from 'react-native'

interface VSpacerProps {
    size: number
}

const VerticalSpacer:FC<VSpacerProps> = (props:VSpacerProps) => {
    const { size } = props;
    return (
        <View 
        style={{
            marginVertical: size
        }}
        />
    )
}

export default VerticalSpacer
