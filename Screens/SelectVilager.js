import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from "react-native-elements";
import { getVillagers } from "../Data/fetchData";

export const SelectVillager = ({navigation, route}) => {
    const villagerData = route?.params?.villagerData;
    const villagerGender = route?.params?.villagerGender;
    const villagerSpecies = route?.params?.villagerSpecies;
    const [results, setResults] = useState([]);

    useEffect(()=> {
        setResults(getVillagers(villagerData, villagerGender, villagerSpecies));
    }, []);

    const setVillager = (villager) => {
        navigation.navigate('AddNewVillager', {villager:villager});
    };

    function villagerButtons() {
        let content = [], columns = [];
        results.forEach((villager, i) => {
            columns.push(
                <TouchableOpacity onPress={() => setVillager(villager)} key={villager.id} style={{ marginBottom: 20}}>
                    <Image source={{uri: villager["icon_uri"]}} style={styles.villagerImg}/>
                    <Text style={styles.questionOptionsLabel}>{villager.name["name-USen"]}</Text>
                </TouchableOpacity>
            );
            if((i+1)%2 === 0) {
                content.push(
                    <View style={styles.questionOptions}>
                        {columns}
                    </View>
                );
                columns = [];
            }
        });
        return content;
    }

    return (
        <View style={styles.container}>
            <View style={styles.backButtonContainer}>
                <Icon raised reverse name='arrow-back' color='#2BB674' onPress={() => {navigation.pop()}}/>
            </View>
            <Text style={styles.title}>Select Villager</Text>
            <ScrollView style={{ width: 300, alignSelf:'center', top:170, height:630, position:'absolute'}}>
                {villagerButtons()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7EDE1',
        flex: 1,
    },
    backButtonContainer: {
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        position: 'absolute',
        top:60,
        left:30,
    },
    title: {
        textAlign: 'center',
        alignSelf: 'center',
        top:107,
        color: '#235E3E',
        fontSize: 24,
        fontWeight: '500',
    },
    questionOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 230,
        alignSelf: 'center',
    },
    questionOption: {
        width: 110,
        height: 110,
    },
    villagerImg: {
        width: 100,
        height: 100,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
    },
    questionOptionsLabel: {
        textAlign: "center",
        fontSize: 14,
        color: "#786951",
        fontWeight: "500",
        textTransform: 'uppercase',
        letterSpacing: 0.8
    }
});
