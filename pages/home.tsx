import React from 'react';
import {StyleSheet, View} from 'react-native';
import MainTemplate from '../templates/main';
import {MaterialIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Card from '../components/card';
import Title from '../components/typography/title';
import {cardsItems} from '../data';
import Column from '../components/layout/column';
import {TMaterialIcons} from '../App';
import {RootStackParamList} from '../types/navigation';

const Tab = createBottomTabNavigator<RootStackParamList>();

const iconsToPages = {
    home: 'home',
    explore: 'search',
    saved: 'favorite',
    myRecipes: 'book',
} as {[name: string]: TMaterialIcons};

const HomeComponent = () => {
    return (
        <MainTemplate>
            <Title size="h4">Последние рецепты</Title>
            <View style={styles.items}>
                {Object.values(cardsItems).map(el => (
                    <Column key={el.id} size={3}>
                        <Card key={el.id} id={el.id} title={el.title} />
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
