import React, {ReactNode} from 'react';
import {ScrollView, StyleProp, ViewStyle} from 'react-native';
import Wrapper from '../components/layout/wrapper';

const MainTemplate = ({
    children,
    style = {},
}: {
    children: ReactNode;
    style?: ViewStyle;
}) => {
    return (
        <ScrollView style={style}>
            <Wrapper style={{paddingVertical: 20}}>{children}</Wrapper>
        </ScrollView>
    );
};

export default MainTemplate;
