import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import {cardsItems, measures, TgroceryListItem} from '../../../data';
import MainTemplate from '../../../templates/main';
import Row from '../../../components/row';
import Checkbox from '../../../components/checkbox';
import Title from '../../../components/typography/title';
import Button from '../../../components/button/button';
import { ProcessStackParamList } from '../../../types/navigation';

type Props = NativeStackScreenProps<ProcessStackParamList, 'groceryList'>;

const GroceryList = ({
    route: {
        params: {id},
    },
    navigation,
}: Props) => {
    const {groceryList, parts} = cardsItems[id];

    const {id: part} = Object.values(parts)[0];

    const groceryListParts = Object.values(parts).map(({id, title}) => ({
        title,
        list: groceryList[id],
    }));

    return (
        <MainTemplate>
            {groceryListParts.map(({title, list}, idx) => (
                <View key={idx} style={{marginBottom: 20}}>
                    <Title style={{marginBottom: 15}} size="h4">
                        {title}
                    </Title>
                    {list.map((props, idx) => (
                        <GroceryListItem key={idx} {...props} />
                    ))}
                </View>
            ))}
            <Button
                title="Начать готовить"
                onPress={() =>
                    navigation.push('process', {
                        screen: 'step',
                        params: {
                            id,
                            stepIdx: 0,
                            part,
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
