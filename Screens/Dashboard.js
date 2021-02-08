import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { Icon } from "react-native-elements";
import {VillagerDisplay} from "../Components/VillagerDisplay";

export const Dashboard = ({navigation}) => {
    const [villagerData, setVillagerData] = useState([]);

    function fetchVillagersData() {
        fetch('https://acnhapi.com/v1a/villagers')
            .then((response) => response.json())
            .then((json) => setVillagerData(json))
            .catch((error) => console.error(error));
        return villagerData;
    }
    useEffect(()=> {
        fetchVillagersData();
    });

    return(
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/leafPattern.png")}
                style={{width: "100%", height: "100%"}}
                imageStyle={{opacity:0.3}}
            >
                <View style={styles.listContainer}>
                    <VillagerDisplay villagerData={villagerData}/>
                </View>
                <View style={styles.addButtonContainer}>
                    <Icon raised reverse name='add' color='#2BB674' onPress={() => navigation.navigate('SelectGender', {villagerData:villagerData})}/>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEF6EC',
    },
    listContainer: {
        alignSelf: 'center',
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#fff',
        width: 350,
        height: 720,
        paddingBottom: 32,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
    },
    addButtonContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        bottom:30,
        position:'absolute',
        alignSelf: 'center'
    },
});

