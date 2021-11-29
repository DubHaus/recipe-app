import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import {Link, useNavigation} from '@react-navigation/native';

import Title from '../../components/typography/title';
import {cardsItems, measures} from '../../data';
import MainTemplate from '../../templates/main';
import Header from '../../components/header';
import {RecipeStackParamList} from './recipeStack';
import {RootStackParamList} from '../../App';
import Button from '../../components/button/button';

type InfoPorps = {
    time: number;
    difficultyLevel: number;
    calories: number;
    diets: string[];
};
const Info = ({time, difficultyLevel, calories, diets}: InfoPorps) => (
    <View>
        <View style={styles.line}>
            <Text style={{lineHeight: 27}}>Сложность</Text>
            <Text>{difficultyLevel}</Text>
        </View>
        <View style={styles.line}>
            <Text style={{lineHeight: 27}}>Время приготовления</Text>
            <Text>{time}</Text>
        </View>
        <View style={styles.line}>
            <Text style={{lineHeight: 27}}>Каллории</Text>
            <Text>{calories}</Text>
        </View>
        <View style={styles.line}>
            <Text style={{lineHeight: 27}}>Диета</Text>
            <Text>{diets.join(' ,')}</Text>
        </View>
    </View>
);

type RecipePreviewProps = {id: string};

type NavigationProps = NativeStackScreenProps<RecipeStackParamList>;

const RecipePreview = ({id}: RecipePreviewProps) => {
    const {
        desciption,
        time,
        difficultyLevel,
        calories,
        diets,
        parts,
        groceryList,
    } = cardsItems[id];

    const navigation = useNavigation<NavigationProps['navigation']>();

    return (
        <MainTemplate>
            <View>
                <View style={styles.section}>
                    <View style={styles.images}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/images/pizza-1.jpeg')}
                        />
                        <View style={styles.smallImages}>
                            <Image
                                style={styles.smallImage}
                                source={require('../../assets/images/pizza-1.jpeg')}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>{desciption}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Инфо</Text>
                    <Info
                        time={time}
                        difficultyLevel={difficultyLevel}
                        calories={calories}
                        diets={diets}
                    />
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Список продуктов</Text>
                    {Object.values(parts).map(({title, id}) => (
                        <View key={id}>
                            <Text style={styles.title}>{title}</Text>
                            {Object.values(groceryList[id]).map(
                                ({title, measure, count}) => (
                                    <Text
                                        style={{
                                            ...styles.text,
                                            lineHeight: 27,
                                        }}>{`\u2022 ${title} ${count || ''} ${
                                        measure
                                            ? measures[measure].shortTitle
                                            : ''
                                    }`}</Text>
                                )
                            )}
                        </View>
                    ))}
                </View>
            </View>
            <Button
                title="Начать готовить"
                onPress={() =>
                    navigation.navigate('process', {
                        screen: 'groceryList',
                        params: {id},
                    })
                }
            />
        </MainTemplate>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        width: 48,
        height: 48,
    },
    section: {
        marginBottom: 20,
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    },
    image: {
        flex: 1,
        height: 200,
        borderRadius: 5,
        marginRight: 20,
    },
    smallImages: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    smallImage: {
        height: 80,
        width: 80,
        borderRadius: 5,
    },
    text: {
        fontSize: 14,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 27,
    },
});

export default RecipePreview;
