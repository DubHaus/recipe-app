import {Link, StackActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {cardsItems} from '../../../data';
import {RecipeStackParamList} from '../recipeStack';
import {ProcessStackParamList} from './processStack';
import MainTemplate from '../../../templates/main';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Title from '../../../components/typography/title';
import Button from '../../../components/button/button';
import {Text} from 'react-native-elements';

type Props = NativeStackScreenProps<ProcessStackParamList, 'step'>;

const RecipeStep = ({
    route: {
        params: {id, part: partId, stepIdx = 0},
    },
    navigation,
}: Props) => {
    const parts = Object.values(cardsItems[id].parts);
    const currentPartIdx = parts.findIndex(part => partId === part.id);
    const {steps} = parts[currentPartIdx];
    const {title: stepTitle, text, images} = steps[stepIdx];

    const mainImage = images[0];
    const restImages = images.slice(1);

    const nextStep = steps[stepIdx + 1]
        ? {id, part: partId, stepIdx: stepIdx + 1}
        : parts[currentPartIdx + 1]
        ? {id, part: parts[currentPartIdx + 1].id, stepIdx: 0}
        : null;

    console.log(nextStep, steps);

    return (
        <MainTemplate>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 470,
                }}>
                <Title style={styles.title} size="h4">
                    {stepTitle}
                </Title>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.images}>
                    <Image style={styles.image} source={{uri: mainImage}} />
                    <View style={styles.smallImages}>
                        {restImages.map(src => (
                            <Image
                                style={styles.smallImage}
                                source={{uri: src}}
                            />
                        ))}
                    </View>
                </View>
                {nextStep ? (
                    <Button
                        title="Следующий шаг"
                        onPress={() =>
                            navigation.push('process', {
                                screen: 'step',
                                params: nextStep,
                            })
                        }
                    />
                ) : (
                    <Button
                        title="Закончить рецепт"
                        onPress={() =>
                            navigation?.getParent()?.navigate('congrats', {id})
                        }
                    />
                )}
            </View>
        </MainTemplate>
    );
};

const styles = StyleSheet.create({
    title: {
        marginBottom: 20,
    },
    text: {
        lineHeight: 24,
        fontSize: 16,
        marginBottom: 20,
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 60,
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
});

export default RecipeStep;
