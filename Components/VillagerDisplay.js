import React, {useEffect, useState} from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { getStoredVillagers } from "../Data/storage";
import { Divider } from "react-native-elements";

export const VillagerDisplay = (props) => {
    const [villagerList, setVillagerList] = useState("");

    function fetchStoredVillagers() {
        getStoredVillagers()
            .then((response) => setVillagerList(response))
            .catch((error) => console.error(error))
    }
    useEffect(()=> {
        fetchStoredVillagers();
    }, [props.villagerData]);

    const displayVillager = villagerList ? (
        <View style={styles.parentList}>
            {villagerList.map(villager =>
                <TouchableOpacity style={styles.listItem} key={villager.id}>
                    <Image source={{uri: villager.icon}} style={styles.villagerImg}/>
                    <Text style={styles.villagerName}>{villager.name}</Text>
                </TouchableOpacity>
            )}
        </View>
    ) : <Text/>;

    const divider = villagerList ? (
        <Divider style={{ backgroundColor: '#E6D2C1', height: 3, alignSelf: 'stretch', marginLeft: 16, marginRight: 16 }} />
    ) : <Text/>;

    const title = villagerList ? (
        <Text style={styles.listTitle}>Your Villagers</Text>
    ) : <Text style={styles.listTitle}>Add Your Villagers!</Text>;

    return (
        <View>
            <View>
                {title}
                {divider}
                <ScrollView style={{width: '100%'}}>
                    {displayVillager}
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        flexBasis: '50%',
        paddingBottom: 18,
        paddingTop: 12
    },
    parentList: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listTitle: {
        textAlign: "center",
        fontSize: 20,
        color: "#54403E",
        fontWeight: "bold",
        marginBottom: 16,
    },
    villagerImg: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: 5,
    },
    villagerName: {
        textAlign: "center",
        fontSize: 16,
        color: "#54403E",
        fontWeight: "bold",
    }
});
