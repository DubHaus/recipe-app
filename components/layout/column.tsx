import React, {ReactNode, useMemo} from 'react';
import {
    StyleProp,
    StyleSheet,
    useWindowDimensions,
    View,
    ViewStyle,
} from 'react-native';
import {ColumnSizes, COLUMN_COUNT, GUTTER, MARGIN} from './params';

type Props = {
    size: ColumnSizes;
    children: ReactNode;
};

const Column = ({size, children}: Props) => {
    const {width} = useWindowDimensions();
    const styles = useMemo(() => getStyles(size, width), [width, size]);

    return <View style={styles}>{children}</View>;
};

const getStyles = (
    size: ColumnSizes,
    screenWidth: number
): StyleProp<ViewStyle> => {
    const contentWidth = screenWidth - MARGIN * 2;

    return {
        width: contentWidth / (COLUMN_COUNT / size) - GUTTER / 2,
    };
};

export default Column;
