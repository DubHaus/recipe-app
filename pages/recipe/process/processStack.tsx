import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import GroceryList from './groceryList';
import RecipeStep from './recipeStep';
import {MaterialIcons} from '@expo/vector-icons';

import Header from '../../../components/header';
import Title from '../../../components/typography/title';
import {Pressable, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import IconButton from '../../../components/button/iconButton';
import {cardsItems} from '../../../data';
import {RouteProp, useRoute} from '@react-navigation/core';
import Row from '../../../components/row';
import {
    ProcessStackParamList,
    RecipeStackParamList,
    RootStackParamList,
} from '../../../types/navigation';

const Drawer = createDrawerNavigator<ProcessStackParamList>();

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
    state,
    ...props
}: DrawerContentComponentProps) => {
    const {
        name,
        params: {id, part, stepIdx = 0},
    } = state.routes[state.index];
    const {parts} = cardsItems['1'];
    return (
        <DrawerContentScrollView
            style={{paddingVertical: 20, paddingHorizontal: 5}}
            {...props}>
            <MenuItem
                title="Список продуктов"
                isActive={name === 'groceryList'}
                onPress={() => navigation.navigate('groceryList', {id})}
            />
            {Object.values(parts).map(({id: partId, steps, title}) => {
                const isActivePart = partId === part;
                return (
                    <View key={partId}>
                        <Title style={{marginBottom: 10}} size="h5">
                            {title}
                        </Title>
                        {steps.map(({title}, idx) => {
                            const isActive = isActivePart && idx === stepIdx;
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
                                />
                            );
                        })}
                    </View>
                );
            })}
        </DrawerContentScrollView>
    );
};

const ProcessStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
            initialRouteName="groceryList"
            screenOptions={{
                header: ({navigation: {openDrawer, getParent}, route}) => {
                    const {params, name} = route;
                    const parent = getParent();
                    const part = params && 'part' in params && params?.part;
                    return (
                        <Header>
                            <IconButton
                                style={styles.button}
                                onPress={openDrawer}
                                icon={<MaterialIcons name="menu" size={28} />}
                            />
                            <Title size="h4" bold>
                                {name === 'step' && part
                                    ? cardsItems[params?.id].parts[part].title
                                    : 'Список продуктов'}
                            </Title>
                            <IconButton
                                style={styles.button}
                                onPress={() =>
                                    parent?.navigate('preview', {
                                        id: params?.id,
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
