import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Button as ButtonComponent, Text} from 'react-native-elements';

type Props = {
    title: string;
    type?: 'primary' | 'secondary';
    onPress: () => void;
};

const Button = ({title, type = 'primary', onPress}: Props) => (
    <Pressable
        onPress={onPress}
        style={[styles.container, styles[`${type}Button`]]}>
        <Text style={[styles.text, styles[type]]}> {title}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    primary: {
        color: '#FFFFFF',
    },
    secondary: {
        color: '#0F172A',
    },
    primaryButton: {
        backgroundColor: '#0F172A',
    },
    secondaryButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#0F172A',
        borderWidth: 1,
    },
});

export default Button;
