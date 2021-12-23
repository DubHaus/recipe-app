import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

const Header = ({children}: {children: ReactNode}) => (
    <View style={styles.header}>{children}</View>
);

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 30,
        paddingBottom: 5,
    },
});

export default Header;
