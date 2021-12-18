import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import {Image, StyleSheet, View} from 'react-native';
import {cardsItems} from '../../../data';
import MainTemplate from '../../../templates/main';
import Title from '../../../components/typography/title';
import Button from '../../../components/button/button';
import {Text} from 'react-native-elements';
import {ProcessStackParamList} from '../../../types/navigation';

// const notification = () => {
//     PushNotificationIOS.requestPermissions()
//     PushNotificationIOS.checkPermissions(console.log);

//     PushNotificationIOS.addNotificationRequest({
//         id: 'id01',
//         title: 'Hello from notifications',
//         body: 'Hello ...',
//         fireDate: new Date(Date.now() + 10 * 1000),
//         repeats: false,
//     });
// };

// function addMinutes(date: Date, minutes: number) {
//     return new Date(date.getTime() + minutes * 60000);
// }

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

    return (
        <MainTemplate
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
            }}>
            <View>
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
            </View>
            {nextStep ? (
                <Button
                    title="Следующий шаг"
                    onPress={() => {
                        navigation.push('process', {
                            screen: 'step',
                            params: nextStep,
                        });
                    }}
                />
            ) : (
                <Button
                    title="Закончить рецепт"
                    onPress={() =>
                        navigation?.getParent()?.navigate('congrats', {id})
                    }
                />
            )}
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
