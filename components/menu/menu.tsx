import React from 'react';

import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StyleSheet, View} from 'react-native';
import {cardsItems} from '../../data';
import Title from '../typography/title';
import MenuItem from './menuItem';
import Subtitle from './subtitle';

const Menu = ({navigation, state, ...props}: DrawerContentComponentProps) => {
    const {
        name,
        params: {id, part, stepIdx = 0},
    } = state.routes[state.index];
    const {parts} = cardsItems[id];
    return (
        <DrawerContentScrollView
            style={{paddingVertical: 20, paddingHorizontal: 5}}
            {...props}>
            <MenuItem
                icon="format-list-bulleted"
                title="Список продуктов"
                isActive={name === 'groceryList'}
                onPress={() => navigation.navigate('groceryList', {id})}
            />
            {Object.values(parts).map(({id: partId, steps, title}) => {
                const isActivePart = partId === part;
                return (
                    <View style={{marginTop: 8}}>
                        <Subtitle title={title} />
                        <View style={styles.section} key={partId}>
                            {steps.map(({title}, idx) => {
                                const isDone = idx < stepIdx;
                                const isActive =
                                    isActivePart && idx === stepIdx;
                                return (
                                    <MenuItem
                                        key={idx}
                                        onPress={() =>
                                            navigation.jumpTo('step', {
                                                id,
                                                stepIdx: idx,
                                                part: partId,
                                            })
                                        }
                                        isActive={isActive}
                                        title={title}
                                        icon={isDone ? 'done' : undefined}
                                        secondary={isDone}
                                    />
                                );
                            })}
                        </View>
                    </View>
                );
            })}
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    section: {
        paddingLeft: 28,
    },
});

export default Menu;
