import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        alert('Storage successfully cleared!');
    } catch (e) {
        alert('Failed to clear the async storage.');
    }
};

const storeVillager = async (villager) => {
    try {
        let storedVillagers = await AsyncStorage.getItem('@storage_Key');
        if(!storedVillagers) {
            storedVillagers = [villager];
        } else {
            storedVillagers = JSON.parse(storedVillagers);
            storedVillagers = [...storedVillagers, villager];
        }
        await AsyncStorage.setItem('@storage_Key', JSON.stringify(storedVillagers));
    } catch(e) {
        alert(e);
    }
};

const getStoredVillagers = async () => {
    try {
        let storedVillagers = await AsyncStorage.getItem('@storage_Key');
        if(!storedVillagers) return [];
        storedVillagers = JSON.parse(storedVillagers);
        return storedVillagers;
    } catch(e) {
        alert(e);
    }
};

const clearVillager = async (villager) => {
    try {
        let storedVillagers = await AsyncStorage.getItem('@storage_Key');
        storedVillagers = JSON.parse(storedVillagers);
        storedVillagers = storedVillagers.filter(obj => {
            return (obj.id !== villager.id)
        });
        await AsyncStorage.setItem('@storage_Key', JSON.stringify(storedVillagers));
    } catch(e) {
        alert(e);
    }
};

export { clearStorage, storeVillager, getStoredVillagers, clearVillager };
