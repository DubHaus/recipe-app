import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRecoilValue} from 'recoil';

import Card from '../components/card';
import Title from '../components/typography/title';
import Column from '../components/layout/column';
import {TMaterialIcons} from '../../App';
import {RootStackParamList} from '../types/navigation';
import recipesState from '../state/recipes';
import MainTemplate from '../templates/main';

const Tab = createBottomTabNavigator<RootStackParamList>();

const iconsToPages = {
    home: 'home',
    explore: 'search',
    saved: 'favorite',
    myRecipes: 'book',
} as {[name: string]: TMaterialIcons};

const HomeComponent = () => {
    const recipes = useRecoilValue(recipesState);
    return (
        <MainTemplate>
            <Title size="h4">Последние рецепты</Title>
            <View style={styles.items}>
                {recipes.map(({id, title, image}) => (
                    <Column key={id} size={3}>
                        <Card id={id} title={title} image={image} />
                    </Column>
                ))}
            </View>
        </MainTemplate>
    );
};

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => {
                return {
                    tabBarIcon: () => (
                        <MaterialIcons
                            size={28}
                            name={iconsToPages[route.name]}
                        />
                    ),
                    tabBarLabel: () => null,
                    tabBarItemStyle: {
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                    },
                    tabBarActiveBackgroundColor: '#E2E8F0',
                    header: () => null,
                };
            }}>
            <Tab.Screen name="home" component={HomeComponent} />
            <Tab.Screen name="explore" component={HomeComponent} />
            <Tab.Screen name="myRecipes" component={HomeComponent} />
            <Tab.Screen name="saved" component={HomeComponent} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        width: 48,
        height: 48,
    },
    items: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default Home;
