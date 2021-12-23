import React from 'react';

import {Pressable, StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {Text} from 'react-native-elements';

import Row from '../row';
import {TMaterialIcons} from '../../../App';

type Props = {
    title: string;
    isActive?: boolean;
    onPress: () => void;
    icon?: TMaterialIcons;
    secondary?: boolean;
};

const MenuItem = ({title, isActive, onPress, icon, secondary}: Props) => (
    <Pressable
        style={[
            styles.container,
            {
                ...(isActive ? {backgroundColor: '#F1F3F4'} : {}),
            },
        ]}
        onPress={onPress}>
        <Row
            style={{
                justifyContent: 'flex-start',
                height: '100%',
            }}>
            {icon && (
                <MaterialIcons
                    style={styles.icon}
                    name={icon}
                    size={24}
                    color={secondary ? '#919699' : 'black'}
                />
            )}
            <Text
                numberOfLines={1}
                style={[styles.text, secondary ? {color: '#919699'} : {}]}>
                {title}
            </Text>
        </Row>
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        height: 46,
        padding: 8,
        borderRadius: 8,
    },
    icon: {
        marginRight: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
    },
});

export default MenuItem;
