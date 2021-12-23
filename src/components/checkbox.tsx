import React from 'react';
import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {Text} from 'react-native-elements';
import {MaterialIcons} from '@expo/vector-icons';

type Props = {
    checked: boolean;
    onPress: (checked: boolean) => void;
    title?: string;
    style?: ViewStyle;
};

const Checkbox = ({checked, onPress, title = '', style = {}}: Props) => (
    <Pressable
        style={[styles.container, style]}
        onPress={() => onPress(!checked)}>
        <View style={[styles.icon, checked ? styles.checked : {}]}>
            <MaterialIcons name="done" size={24} color="white" />
        </View>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    icon: {
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#0F172A',
        borderRadius: 2,
        borderWidth: 1,
        marginRight: 10,
    },
    checked: {
        backgroundColor: '#0F172A',
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
    },
});

export default Checkbox;
