import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {RootStackParamList} from '../../../App';
import GroceryList from './groceryList';
import RecipeStep from './recipeStep';
import {MaterialIcons} from '@expo/vector-icons';

import Header from '../../../components/header';
import Title from '../../../components/typography/title';
import {Pressable, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import IconButton from '../../../components/button/iconButton';
import {cardsItems} from '../../../data';
import {useRoute} from '@react-navigation/core';
import Row from '../../../components/row';
import CongratsPage from '../congratsPage';

export type ProcessStackParamList = {
    groceryList: {
        id: string;
    };
    step: {
        id: string;
        stepIdx: number;
        part?: string;
    };
    congrats: {
        id: string;
    };
};

const Drawer = createDrawerNavigator<ProcessStackParamList>();
const Stack = createNativeStackNavigator<ProcessStackParamList>();

const MenuItem = ({
    title,
    isActive,
    onPress,
}: {
    title: string;
    isActive?: boolean;
    onPress: () => void;
}) => (
    <Pressable style={{height: 35}} onPress={onPress}>
        <Row
            style={{
                justifyContent: 'flex-start',
            }}>
            <MaterialIcons
                style={{marginRight: 5, width: 16}}
                size={8}
                color={isActive ? 'black' : 'transparent'}
                name="stop-circle"
            />
            <Text style={{fontSize: 16}}>{title}</Text>
        </Row>
    </Pressable>
);

const CustomDrawerContent = ({
    navigation,
    id,
    stepIdx,
    part,
    ...props
}: DrawerContentComponentProps & {
    id: string;
    stepIdx: number;
    part: string;
}) => {
    const {parts} = cardsItems[id];
    return (
        <DrawerContentScrollView
            style={{paddingVertical: 20, paddingHorizontal: 5}}
            {...props}>
            <MenuItem
                title="Список продуктов"
                isActive={!part}
                onPress={() => navigation.navigate('groceryList', {id})}
            />
            {Object.values(parts).map(({id: partId, steps, title}) => {
                const isActivePart = partId === part;
                return (
                    <View>
                        <Title style={{marginBottom: 10}} size="h5">
                            {title}
                        </Title>
                        {steps.map(({title}, idx) => {
                            const isActive = isActivePart && idx === stepIdx;
                            return (
                                <MenuItem
                                    key={idx}
                                    onPress={() =>
                                        navigation.push('process', {
                                            screen: 'step',
                                            params: {
                                                id,
                                                stepIdx: idx,
                                                part: partId,
                                            },
                                        })
                                    }
                                    isActive={isActive}
                                    title={title}
                                />
                            );
                        })}
                    </View>
                );
            })}
        </DrawerContentScrollView>
    );
};

const ProcessStack = props => {
    const {
        params: {params},
    } = useRoute();
    return (
        <Drawer.Navigator
            drawerContent={props => (
                <CustomDrawerContent
                    id={params.id}
                    stepIdx={params.stepIdx || 0}
                    part={params.part}
                    {...props}
                />
            )}
            initialRouteName="groceryList"
            screenOptions={{
                header: ({
                    navigation: {openDrawer, getParent, navigate},
                    route: {params, name},
                }) => {
                    const parent = getParent();
                    return (
                        <Header>
                            <IconButton
                                style={styles.button}
                                onPress={openDrawer}
                                icon={<MaterialIcons name="menu" size={28} />}
                            />
                            <Title size="h4" bold>
                                {name === 'groceryList'
                                    ? 'Список продуктов'
                                    : cardsItems[params.id].parts[params.part]
                                          .title}
                            </Title>
                            <IconButton
                                style={styles.button}
                                onPress={() =>
                                    parent?.navigate('preview', {
                                        id: params.id,
                                    })
                                }
                                icon={<MaterialIcons name="close" size={28} />}
                            />
                        </Header>
                    );
                },
            }}>
            <Drawer.Screen name="groceryList" component={GroceryList} />
            <Drawer.Screen name="step" component={RecipeStep} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 28,
        height: 28,
    },
});

export default ProcessStack;
