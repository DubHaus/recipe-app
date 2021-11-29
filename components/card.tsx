import React from 'react';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {MaterialIcons} from '@expo/vector-icons';

import IconButton from './button/iconButton';
import Title from './typography/title';
import {useLinkProps} from '@react-navigation/native';
import {RootStackParamList} from '../App';

type Props = {title: string; id: string};

const Card = ({title, id}: Props) => {
    const {onPress} = useLinkProps<RootStackParamList>({
        to: {screen: 'recipe', params: {id}},
    });
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require('./../assets/images/pizza-1.jpeg')}>
                <IconButton
                    style={styles.iconButton}
                    onPress={() => {}}
                    icon={
                        <MaterialIcons
                            color="black"
                            name="favorite-outline"
                            size={20}
                        />
                    }
                />
            </ImageBackground>
            <View style={styles.description}>
                <View style={styles.descriptionItem}>
                    <Title size="h6">{title}</Title>
                </View>
                <View style={styles.descriptionItem}>
                    <Text style={{fontSize: 9}}>
                        Средиземноморская
                    </Text>
                </View>
                <View style={styles.descriptionItem}>
                    <View style={styles.params}>
                        <View style={styles.iconWithText}>
                            <MaterialIcons
                                color="black"
                                name="fastfood"
                                size={15}
                            />
                            <Text style={{fontSize: 12, marginLeft: 2}}>
                                115 кал
                            </Text>
                        </View>
                        <View style={styles.iconWithText}>
                            <MaterialIcons
                                color="black"
                                name="timer"
                                size={15}
                            />
                            <Text style={{fontSize: 12, marginLeft: 2}}>
                                60 мин
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.iconWithText}>
                    <MaterialIcons
                        style={{marginRight: 4}}
                        color="black"
                        name="star"
                        size={20}
                    />
                    <MaterialIcons
                        style={{marginRight: 4}}
                        color="black"
                        name="star"
                        size={20}
                    />
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    image: {
        height: 102,
        overflow: 'hidden',
        borderRadius: 5,
    },
    iconButton: {
        width: 35,
        height: 35,
        backgroundColor: 'rgba(255, 255, 255, 0.57)',
        borderRadius: 5,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    iconWithText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    params: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    description: {
        padding: 6,
        paddingBottom: 10,
    },
    descriptionItem: {
        marginBottom: 15,
    },
});

export default Card;
