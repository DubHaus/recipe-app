import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

type Props = {children: ReactNode; style?: ViewStyle};

const Row = ({children, style = {}}: Props) => (
    <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default Row;
