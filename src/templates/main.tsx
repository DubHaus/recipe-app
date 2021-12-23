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
        <ScrollView contentContainerStyle={{flexGrow: 1, minHeight: '100%'}}>
            <Wrapper style={{paddingVertical: 20, ...style}}>
                {children}
            </Wrapper>
        </ScrollView>
    );
};

export default MainTemplate;
