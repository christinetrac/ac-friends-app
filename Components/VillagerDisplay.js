import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStoredVillagers } from "../Data/storage";

export const VillagerDisplay = () => {
    const [villagerList, setVillagerList] = useState("");

    function fetchStoredVillagers() {
        getStoredVillagers()
            .then((response) => setVillagerList(response))
            .catch((error) => console.error(error))
    }
    useEffect(()=> {
        fetchStoredVillagers();
    }, [villagerList]);

    const displayVillager = villagerList && (
        <Text>
            {villagerList.map(villager =>
                <Text style={styles.container}>
                    {villager.name}
                </Text>
            )}
        </Text>
    );

    return (
        <View>
            <Text>
                {displayVillager}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        color: '#FF0000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});