import React, {useEffect, useState} from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { getStoredVillagers } from "../Data/storage";
import {Icon} from "react-native-elements";
import { LevelTag } from '../Components/LevelTag';
import { StatusTag } from "./StatusTag";

export const VillagerDisplay = ({navigation}, props) => {
    const [villagerList, setVillagerList] = useState("");

    function fetchStoredVillagers() {
        getStoredVillagers()
            .then((response) => setVillagerList(response))
            .catch((error) => console.error(error))
    }
    useEffect(()=> {
        fetchStoredVillagers();
    }, [props.villagerData]);

    const visitProfile = (villager) => {
        navigation.navigate('Profile', {villager:villager})
    };

    const displayVillager = villagerList ? (
        <View style={styles.parentList}>
            {villagerList.map(villager =>
                <TouchableOpacity onPress={() => visitProfile(villager)} style={styles.listItem} key={villager.id}>
                    <Image source={{uri: villager.icon}} style={styles.villagerImg}/>
                    <Text style={styles.villagerName}>{villager.name}</Text>
                    <View style={styles.levelTag}>
                        <LevelTag level={villager.level}/>
                    </View>
                    <View style={styles.statusTag}>
                        <StatusTag status={villager.status}/>
                    </View>
                    <View style={styles.arrow}>
                        <Icon name='keyboard-arrow-right' color='#8ECFCA' size={40}/>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    ) : <Text/>;

    const empty = !villagerList ? (
        <Text style={styles.empty}>press the + button to add your villagers!</Text>
    ) : <Text/>;

    return (
        <View>
            {empty}
            <ScrollView style={{width: '100%'}}>
                {displayVillager}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
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
        paddingBottom: 18,
        paddingTop: 12,
        width:350,
        height:100,
        backgroundColor:'#fff',
        borderRadius:22,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        alignSelf:'center',
        marginBottom:12
    },
    parentList: {
        alignSelf: "center",
        paddingTop:10,
        width:360
    },
    villagerImg: {
        width: 75,
        height: 75,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        position:'absolute',
        top:8,
        left:20
    },
    villagerName: {
        textAlign: "left",
        fontSize: 24,
        color: "#235E3E",
        fontWeight: "500",
        left:120,
        top:12
    },
    levelTag: {
        position:'absolute',
        left:120,
        top:60
    },
    statusTag: {
        position:'absolute',
        left:204,
        top:60
    },
    arrow: {
        position:'absolute',
        right:17,
        top:30
    }
});
