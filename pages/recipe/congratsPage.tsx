import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {View} from 'react-native';
import Title from '../../components/typography/title';
import Button from '../../components/button/button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProcessStackParamList} from './process/processStack';
import {RecipeStackParamList} from './recipeStack';
import Wrapper from '../../components/layout/wrapper';
import MainTemplate from '../../templates/main';

type Props = NativeStackScreenProps<RecipeStackParamList, 'congrats'>;

const CongratsPage = ({
    route: {
        params: {id},
    },
    navigation: {navigate},
}: Props) => {
    return (
        <MainTemplate>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: 400,
                    justifyContent: 'space-between'
                }}>
                <Title size="h1">Поздравлем</Title>
                <Title size="h3">Вы сделали рецепт</Title>
                <MaterialIcons
                    name="sentiment-very-satisfied"
                    size={120}
                    color="black"
                />
                <Button
                    title="Закрыть рецепт"
                    type="secondary"
                    onPress={() =>
                        navigate('preview', {
                            id,
                        })
                    }
                />
                <Button
                    title="Добавить в избранное"
                    onPress={() =>
                        navigate('preview', {
                            id,
                        })
                    }
                />
            </View>
        </MainTemplate>
    );
};

export default CongratsPage;
