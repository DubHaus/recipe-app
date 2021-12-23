import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRecoilValue} from 'recoil';

import {measures} from '../../data';
import Button from '../../components/button/button';
import {RecipeStackParamList} from '../../types/navigation';
import {currentRecipeSelector} from '../../state/recipePageNavigation';
import MainTemplate from '../../templates/main';

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

type NavigationProps = NativeStackScreenProps<RecipeStackParamList>;

type Props = NativeStackScreenProps<RecipeStackParamList, 'preview'>;

const RecipePreview = ({
    route: {
        params: {id},
    },
}: Props) => {
    const info = useRecoilValue(currentRecipeSelector);
    const navigation = useNavigation<NavigationProps['navigation']>();

    if (!info) {
        return null;
    }

    const {desciption, time, difficultyLevel, calories, diets, parts, image} =
        info;

    return (
        <MainTemplate>
            <View>
                <View style={styles.section}>
                    <View style={styles.images}>
                        <Image style={styles.image} source={{uri: image}} />
                        <View style={styles.smallImages}>
                            <Image
                                style={styles.smallImage}
                                source={{uri: image}}
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
                    {parts.map(({title, id, groceryList}) => (
                        <View key={id}>
                            <Text style={styles.title}>{title}</Text>
                            {groceryList.map(({title, measure, count}, idx) => (
                                <Text
                                    key={idx}
                                    style={{
                                        ...styles.text,
                                        lineHeight: 27,
                                    }}>{`\u2022 ${title} ${count || ''} ${
                                    measure ? measures[measure].shortTitle : ''
                                }`}</Text>
                            ))}
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
