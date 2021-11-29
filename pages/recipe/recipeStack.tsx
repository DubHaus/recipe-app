import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Button} from 'react-native-elements';

import React from 'react';
import {RootStackParamList} from '../../App';
import RecipePreview from './recipePreview';
import ProcessStack from './process/processStack';
import {MaterialIcons} from '@expo/vector-icons';

import Header from '../../components/header';
import Title from '../../components/typography/title';
import {StyleSheet} from 'react-native';
import {cardsItems} from '../../data';
import IconButton from '../../components/button/iconButton';
import CongratsPage from './congratsPage';

export type RecipeStackParamList = {
    preview: {};
    process: {};
    congrats: {
        id: string;
    };
};

const Stack = createNativeStackNavigator<RecipeStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'recipe'>;

const RecipeStack = ({route: {params}, navigation}: Props) => (
    <Stack.Navigator
        screenOptions={{
            header: ({route: {name}}) => {
                const {title} = cardsItems[params.id];
                return name !== 'process' ? (
                    <Header>
                        <Title size="h4" bold>
                            {title}
                        </Title>
                        <IconButton
                            style={styles.button}
                            onPress={() => {
                                navigation.goBack();
                            }}
                            icon={<MaterialIcons name="close" size={28} />}
                        />
                    </Header>
                ) : null;
            },
            contentStyle: {backgroundColor: '#fff'},
        }}>
        <Stack.Screen name="preview">
            {({...props}) => <RecipePreview id={params.id} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="process" component={ProcessStack} />
        <Stack.Screen name="congrats" component={CongratsPage} />
    </Stack.Navigator>
);

const styles = StyleSheet.create({
    button: {
        width: 28,
        height: 28,
    },
});

export default RecipeStack;
