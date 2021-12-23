import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {MARGIN} from './params';

type Props = {
    children: ReactNode;
    style?: ViewStyle;
};

const Wrapper = ({children, style = {}}: Props) => {
    return (
        <View style={[{width: '100%', paddingHorizontal: MARGIN}, style]}>
            {children}
        </View>
    );
};

export default Wrapper;
