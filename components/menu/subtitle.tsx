import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {MaterialIcons} from '@expo/vector-icons';

import Title from '../typography/title';

type Props = {
    title: string;
};

const Subtitle = ({title}: Props) => (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 8,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: '#919699',
    },
});

export default Subtitle;
