import AsyncStorage from '@react-native-async-storage/async-storage';

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
        JSON.parse(storedVillagers);
        if(!storedVillagers) {
            storedVillagers = [villager];
        } else {
            storedVillagers = [...JSON.parse(storedVillagers), villager];
        }
        await AsyncStorage.setItem('@storage_Key', JSON.stringify(storedVillagers));
    } catch(e) {
        alert('Failed to store the villager.');
    }
};

const getStoredVillagers = async () => {
    try {
        const storedVillagers = await AsyncStorage.getItem('@storage_Key');
        if(!storedVillagers) return null;
        return JSON.parse(storedVillagers);
    } catch(e) {
        alert('Failed to read the villager.');
    }
};

const clearVillager = async () => {

};

export { clearStorage, storeVillager, getStoredVillagers, clearVillager };
