import React, {ReactNode, useEffect} from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';
import RecipeStack from './src/pages/recipe/recipeStack';

import Header from './src/components/header';
import Title from './src/components/typography/title';
import {StyleSheet} from 'react-native';
import {RootStackParamList} from './src/types/navigation';
import {RecoilRoot, useSetRecoilState} from 'recoil';
import recipesState from './src/state/recipes';
import {cardsItems} from './src/data';

export type TMaterialIcons = keyof typeof MaterialIcons.glyphMap;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <RecoilRoot>
            <SafeAreaProvider>
                <RecipesProvider>
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
                            <Stack.Screen
                                name="recipe"
                                component={RecipeStack}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </RecipesProvider>
            </SafeAreaProvider>
        </RecoilRoot>
    );
}

const RecipesProvider = ({children}: {children: ReactNode}) => {
    const setRecieps = useSetRecoilState(recipesState);
    useEffect(() => {
        console.log('SET RECIPES', cardsItems);
        setRecieps(cardsItems);
    }, [setRecieps]);

    return <>{children}</>;
};

const styles = StyleSheet.create({
    button: {
        width: 48,
        height: 48,
    },
});
