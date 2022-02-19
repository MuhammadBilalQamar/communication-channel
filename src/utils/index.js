import React, { useEffect, useState } from 'react';
import { Keyboard, PermissionsAndroid, AsyncStorage } from 'react-native';

var equal = require('deep-equal');

export const deepCompare = (a, b) => {
    return equal(a, b);
};

export const getPermission = async (val) => {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS[val],
        {
            title: 'Access Fine Location',
            message: 'App needs access to your Bluetooth so we can stay connected.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
};

export const setLocalData = async (key, data) => {
    const res = await AsyncStorage.setItem(key, data);
    return res;
};

export const getLocalData = async (key) => {
    return AsyncStorage.getItem(key);
};


export const removeLocalData = async (key) => {
    return AsyncStorage.removeItem(key);
};


export const useKeyPad = () => {
    // custom hook which return keypad is visible
    const [keyPadStatus, setKeypadStatus] = useState(false);

    const keyboardDidShow = (e) => {
        //
        setKeypadStatus(e.endCoordinates.height);
    };

    const keyboardDidHide = () => {
        setKeypadStatus(false);
    };
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
        };
    }, []);

    return keyPadStatus;
};
