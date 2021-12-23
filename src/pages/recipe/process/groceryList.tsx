import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import {measures, TgroceryListItem} from '../../../data';
import MainTemplate from '../../../templates/main';
import Row from '../../../components/row';
import Checkbox from '../../../components/checkbox';
import Title from '../../../components/typography/title';
import Button from '../../../components/button/button';
import {ProcessStackParamList} from '../../../types/navigation';
import {currentRecipeSelector} from '../../../state/recipePageNavigation';
import {useRecoilValue} from 'recoil';

type Props = NativeStackScreenProps<ProcessStackParamList, 'groceryList'>;

const GroceryList = ({
    route: {
        params: {id},
    },
    navigation,
}: Props) => {
    const {parts = []} = useRecoilValue(currentRecipeSelector) || {};

    return (
        <MainTemplate
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
            }}>
            <View>
                {parts.map(({title, groceryList, id}) => (
                    <View key={id} style={{marginBottom: 20}}>
                        <Title style={{marginBottom: 15}} size="h4">
                            {title}
                        </Title>
                        {groceryList.map((props, idx) => (
                            <GroceryListItem key={idx} {...props} />
                        ))}
                    </View>
                ))}
            </View>
            <Button
                title="Начать готовить"
                onPress={() =>
                    navigation.push('process', {
                        screen: 'step',
                        params: {
                            id,
                            step: 0,
                            part: 0,
                        },
                    })
                }
            />
        </MainTemplate>
    );
};

const GroceryListItem = ({title, count, measure}: TgroceryListItem) => {
    const [checked, setChecked] = useState(false);
    const {shortTitle = ''} = measure ? measures[measure] : {};
    return (
        <Row style={{marginBottom: 15}}>
            <Checkbox
                style={{flex: 4}}
                title={title}
                checked={checked}
                onPress={() => setChecked(!checked)}
            />
            <Text style={{fontSize: 16, flex: 2, textAlign: 'right'}}>{`${
                count || ''
            } ${shortTitle}`}</Text>
        </Row>
    );
};

export default GroceryList;
