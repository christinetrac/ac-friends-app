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

    const displayVillager = villagerList ? (
        <View>
            {villagerList.map(villager =>
                <Text style={styles.container} key={villager.id}>
                    {villager.name}
                </Text>
            )}
        </View>
    ) : <Text/>;

    return (
        <View style={styles.container}>
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
        top: 50
    },
});
