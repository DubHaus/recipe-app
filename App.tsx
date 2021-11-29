import React, {useState} from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/home';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';
import {cardsItems} from './data';
import RecipeStack from './pages/recipe/recipeStack';

import Header from './components/header';
import Title from './components/typography/title';
import {StyleSheet} from 'react-native';

export type TMaterialIcons = keyof typeof MaterialIcons.glyphMap;
export type RootStackParamList = {
    home: {};
    explore: {};
    saved: {};
    myRecipes: {};
    recipe: {
        id: string;
    };
    step: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer
                theme={{
                    colors: {
                        background: '#fff',
                        card: '#fff',
                        primary: '#000',
                        notification: '#000',
                        border: '#fff',
                        text: '#000',
                    },
                    dark: false,
                }}>
                <Stack.Navigator
                    screenOptions={{
                        header: ({route: {name}}) => {
                            return name !== 'recipe' ? (
                                <Header>
                                    <Title size="h4" bold>
                                        Добро пожаловать
                                    </Title>
                                    <Button
                                        type="clear"
                                        style={styles.button}
                                        icon={
                                            <MaterialIcons
                                                name="person"
                                                size={24}
                                            />
                                        }
                                    />
                                </Header>
                            ) : null;
                        },
                        contentStyle: {backgroundColor: '#fff'},
                    }}>
                    <Stack.Screen name="home" component={Home} />
                    <Stack.Screen name="explore" component={Home} />
                    <Stack.Screen name="myRecipes" component={Home} />
                    <Stack.Screen name="saved" component={Home} />
                    <Stack.Screen name="recipe" component={RecipeStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 48,
        height: 48,
    },
});
