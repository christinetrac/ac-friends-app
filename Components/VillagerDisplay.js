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

    const empty = !villagerList ? (
        <Text style={styles.empty}>press the + button to add your villagers!</Text>
    ) : <Text/>;

    function getDate() {
        const date = new Date();
        const year = date.getFullYear();
        const day = date.getDate();
        const options = { month: "short" };
        const month = new Intl.DateTimeFormat("en-US", options).format(date);
        return month + ' ' + day + ', ' + year;
    }

    return (
        <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingTop:18}}>
                <Image source={require('../assets/leaf.png')} style={styles.leaf}/>
                <Text style={styles.dateText}>{getDate()}</Text>
            </View>
            <Divider style={styles.divider}/>
            {empty}
            <ScrollView style={{width: '100%'}}>
                {displayVillager}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    dateText: {
        color: '#235E3E',
        fontSize: 24,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
        marginLeft: 8,
    },
    leaf: {
        width: 42,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    divider: {
        backgroundColor: '#CEECCC',
        height: 5,
        width:268,
        position: 'absolute',
        alignSelf: 'center',
        borderRadius:5,
        top:70
    },
    empty: {
        position: 'absolute',
        color: '#C7B2A0',
        fontSize:14,
        fontWeight:'500',
        textTransform:'uppercase',
        textAlign: 'center',
        width:200,
        top:320,
        alignSelf:'center',
        letterSpacing: 0.8,
    },
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
