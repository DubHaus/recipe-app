import React, {ReactNode} from 'react';
import {TextStyle} from 'react-native';
import {Text} from 'react-native-elements';

type TTitileProps = {
    size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
    bold?: boolean;
    style?: TextStyle;
};

const sizeToFontSize = {
    h1: 34,
    h2: 28,
    h3: 24,
    h4: 18,
    h5: 16,
    h6: 14,
};

const Title = ({size, children, bold, style = {}}: TTitileProps) => (
    <Text
        style={{
            ...style,
            fontWeight: bold ? '700' : '500',
            fontSize: sizeToFontSize[size],
        }}>
        {children}
    </Text>
);

export default Title;
