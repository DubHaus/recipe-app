import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Button} from 'react-native-elements';

import React from 'react';

import RecipePreview from './recipePreview';
import ProcessStack from './process/processStack';
import {MaterialIcons} from '@expo/vector-icons';

import Header from '../../components/header';
import Title from '../../components/typography/title';
import {StyleSheet} from 'react-native';
import IconButton from '../../components/button/iconButton';
import CongratsPage from './congratsPage';
import {RecipeStackParamList, RootStackParamList} from '../../types/navigation';
import {useRecoilValue} from 'recoil';
import { currentRecipeSelector } from '../../state/recipePageNavigation';

const Stack = createNativeStackNavigator<RecipeStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'recipe'>;

const RecipeStack = ({navigation}: Props) => {
    const {title} = useRecoilValue(currentRecipeSelector) || {};
    return (
        <Stack.Navigator
            screenOptions={{
                header: ({route: {name}}) => {
                    if (name !== 'process') {
                        return (
                            <Header>
                                <Title size="h4" bold>
                                    {title}
                                </Title>
                                <IconButton
                                    style={styles.button}
                                    onPress={() => {
                                        navigation.goBack();
                                    }}
                                    icon={
                                        <MaterialIcons name="close" size={28} />
                                    }
                                />
                            </Header>
                        );
                    } else return null;
                },
                contentStyle: {backgroundColor: '#fff'},
            }}>
            <Stack.Screen name="preview" component={RecipePreview} />
            <Stack.Screen name="process" component={ProcessStack} />
            <Stack.Screen name="congrats" component={CongratsPage} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 28,
        height: 28,
    },
});

export default RecipeStack;
