import React, {useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {Text} from 'react-native-elements';
import {MaterialIcons} from '@expo/vector-icons';

import Icon from '../../assets/images/icons/cooking';
import IconButton from './button/iconButton';
import useTimer from '../helpers/useTimer';
import formatTime from '../helpers/timeFormater';

type Props = {
    time: number;
    style?: ViewStyle;
    stepTitle?: string;
    id: string;
};

const Timer = ({time, stepTitle = '', id, style}: Props) => {
    const [status, setStatus] = useState<'active' | 'not-active' | 'done'>(
        'not-active'
    );
    const [setTimer, removeTimer] = useTimer(stepTitle, time, id, () => {
        setStatus('done');
    });
    const [secPass, setSecPass] = useState(time);

    const active = status === 'active';
    const done = status === 'done';


    useEffect(() => {
        let interval: NodeJS.Timer;
        if (active) {
            interval = setInterval(
                () => setSecPass(secPass => (secPass > 0 ? secPass - 1 : 0)),
                1000
            );
        } else {
            setSecPass(time);
        }
        return () => clearInterval(interval);
    }, [status, time]);

    return (
        <Pressable
            onPress={() => {
                if (!active) {
                    setTimer();
                    setStatus('active');
                } else {
                    removeTimer();
                    setStatus('not-active');
                }
            }}
            style={[
                styles.container,
                style,
                {backgroundColor: active ? '#E2E8F0' : 'white'},
            ]}>
            <MaterialIcons
                name={active ? 'stop' : 'play-arrow'}
                size={30}
                color={active ? 'red' : 'black'}
            />

            {done && <Text style={styles.time}>Готово!</Text>}
            <Text style={styles.time}>{formatTime(secPass)}</Text>
            {done ? (
                <MaterialIcons name="done" size={30} />
            ) : (
                <Icon size={40} />
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderColor: '#0F172A',
        borderWidth: 1,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 40,
    },
    time: {
        fontSize: 18,
        fontWeight: '700',
    },
});

export default Timer;
