import React, {useEffect, useMemo} from 'react';
import PushNotificationIOS, {
    NotificationRequest,
} from '@react-native-community/push-notification-ios';
import {v4 as Uuid} from 'uuid';

PushNotificationIOS.requestPermissions();
PushNotificationIOS.setNotificationCategories([
    {
        id: 'timer',
        actions: [{id: 'open', title: 'Открыть', options: {foreground: true}}],
    },
]);

const useTimer = (
    title: string,
    sec: number,
    id: string,
    onFinish: () => void
) => {
    const obj: NotificationRequest = {
        id,
        title: `Таймер готовки`,
        body: `Таймер по шагу "${title}" закончился`,
        repeats: false,
        isCritical: true,
        // category: 'timer',
        sound: 'radar.m4r',
    };

    useEffect(() => {
        const type = 'localNotification';
        PushNotificationIOS.addEventListener(type, onFinish);
        return () => {
            PushNotificationIOS.removeEventListener(type);
        };
    });

    return [
        () =>
            PushNotificationIOS.addNotificationRequest({
                ...obj,
                fireDate: new Date(Date.now() + sec * 1000),
            }),
        () => PushNotificationIOS.removePendingNotificationRequests([id]),
    ];
};

export default useTimer;
