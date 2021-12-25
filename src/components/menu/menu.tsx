import React from 'react';

import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StyleSheet, View} from 'react-native';
import Title from '../typography/title';
import MenuItem from './menuItem';
import Subtitle from './subtitle';
import {useRecoilState, useRecoilValue} from 'recoil';
import {TRecipePageNavigation} from '../../state/recipePageNavigation';
import {TPart} from '../../data';
import {recipeStepAtom} from '../../state/recipes';

const Menu = ({
    navigation,
    state,
    parts,
    navigationData,
    setNavigationData,
    ...props
}: DrawerContentComponentProps & {
    parts: TPart[];
    navigationData: TRecipePageNavigation;
    setNavigationData: (val: TRecipePageNavigation) => void;
}) => {
    const {name} = state.routes[state.index];
    const {part, step, id} = navigationData;

    const isGroceryListActive = name === 'groceryList';

    return (
        <DrawerContentScrollView
            style={{paddingVertical: 20, paddingHorizontal: 5}}
            {...props}>
            <MenuItem
                icon="format-list-bulleted"
                title="Список продуктов"
                isActive={isGroceryListActive}
                onPress={() => navigation.navigate('groceryList', {id})}
            />
            {parts.map(({id: partId, steps, title}, partIdx) => {
                const isActivePart = partIdx === part;
                return (
                    <View key={partId} style={{marginTop: 8}}>
                        <Subtitle title={title} />
                        <View style={styles.section} key={partId}>
                            {steps.map(({title, done}, stepIdx) => {
                                const isActive =
                                    isActivePart && stepIdx === step;
                                return (
                                    <Item
                                        key={stepIdx}
                                        params={{
                                            id,
                                            part: partIdx,
                                            step: stepIdx,
                                        }}
                                        onPress={() => {
                                            navigation.jumpTo('step', {
                                                id,
                                                step: stepIdx,
                                                part: partIdx,
                                            });
                                            setNavigationData({
                                                id,
                                                step: stepIdx,
                                                part: partIdx,
                                            });
                                        }}
                                        isActive={
                                            !isGroceryListActive && isActive
                                        }
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

type ItemProps = {
    params: {id: string; part: number; step: number};
    onPress: () => void;
    isActive: boolean;
};

const Item = ({params, onPress, isActive}: ItemProps) => {
    const {title, done} = useRecoilValue(recipeStepAtom(params));

    return (
        <MenuItem
            onPress={() => {
                onPress();
            }}
            isActive={isActive}
            title={title}
            icon={done ? 'done' : undefined}
            secondary={done}
        />
    );
};

const styles = StyleSheet.create({
    section: {
        paddingLeft: 28,
    },
});

export default Menu;
