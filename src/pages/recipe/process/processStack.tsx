import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import GroceryList from './groceryList';
import RecipeStep from './recipeStep';
import {MaterialIcons} from '@expo/vector-icons';

import Header from '../../../components/header';
import Title from '../../../components/typography/title';
import {Pressable, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import IconButton from '../../../components/button/iconButton';
import {RouteProp, useRoute} from '@react-navigation/core';
import Row from '../../../components/row';
import {
    ProcessStackParamList,
    RecipeStackParamList,
    RootStackParamList,
} from '../../../types/navigation';
import Menu from '../../../components/menu/menu';
import {useRecoilState, useRecoilValue} from 'recoil';
import {
    currentRecipeSelector,
    currentRecipeStepSelector,
    recipePageNavigationState,
} from '../../../state/recipePageNavigation';

const Drawer = createDrawerNavigator<ProcessStackParamList>();

const ProcessStack = () => {
    const {parts = []} = useRecoilValue(currentRecipeSelector) || {};
    const {title} = useRecoilValue(currentRecipeStepSelector) || {};
    const [navigationData, setNavigationData] = useRecoilState(
        recipePageNavigationState
    );

    return (
        <Drawer.Navigator
            drawerContent={props => (
                <Menu
                    {...props}
                    navigationData={navigationData}
                    setNavigationData={setNavigationData}
                    parts={parts}
                />
            )}
            initialRouteName="groceryList"
            screenOptions={{
                header: ({navigation: {openDrawer, getParent}, route}) => {
                    const {name} = route;
                    const parent = getParent();

                    return (
                        <Header>
                            <IconButton
                                style={styles.button}
                                onPress={openDrawer}
                                icon={<MaterialIcons name="menu" size={28} />}
                            />
                            <Title size="h4" bold>
                                {name === 'step' ? title : 'Список продуктов'}
                            </Title>
                            <IconButton
                                style={styles.button}
                                onPress={() =>
                                    parent?.navigate('preview', {
                                        id: navigationData.id,
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
