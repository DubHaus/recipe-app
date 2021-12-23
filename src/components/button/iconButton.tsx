import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';
import {TMaterialIcons} from '../../../App';

type IconButtonProps = {
    icon: ReactNode;
    style?: ViewStyle;
    onPress: () => void;
};

type IconProps = React.ComponentProps<typeof MaterialIcons>;

const IconButton = ({
    style: propStyles = {},
    icon,
    onPress,
}: IconButtonProps) => (
    <Pressable style={{...styles.container, ...propStyles}} onPress={onPress}>
        {icon}
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
});

export default IconButton;
