import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { Icon } from "react-native-elements";
import {VillagerDisplay} from "../Components/VillagerDisplay";
import {Header1} from "../Components/Header1";

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

    function getDate() {
        const date = new Date();
        const year = date.getFullYear();
        const day = date.getDate();
        const options = { month: "short" };
        const month = new Intl.DateTimeFormat("en-US", options).format(date);
        return month + ' ' + day + ', ' + year;
    }

    return(
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/leafPattern.png")}
                style={{width: "100%", height: "100%"}}
                imageStyle={{opacity:0.25}}
            >
                <Header1/>
                <View style={styles.addButtonContainer}>
                    <Icon raised reverse name='add' color='#2BB674' onPress={() => navigation.navigate('SelectGender', {villagerData:villagerData})}/>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', alignSelf:'left', position:'absolute', top:65, left:40}}>
                    <Image source={require('../assets/leaf.png')} style={styles.leaf}/>
                    <Text style={styles.dateText}>{getDate()}</Text>
                </View>
                <Text style={styles.greeting}>Welcome back, Island Dweller.</Text>
                <View style={styles.listContainer}>
                    <VillagerDisplay villagerData={villagerData} navigation={navigation}/>
                </View>
                <View style={{position:'absolute', bottom:30, alignSelf:'center'}}>
                    <Icon name='help' color='#786951' onPress={() => navigation.navigate('NeedHelp')}/>
                    <Text style={styles.help}>Need Help?</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 620,
        paddingBottom: 32,
        top:178,
    },
    addButtonContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        right:22,
        top:112,
        position:'absolute',
    },
    dateText: {
        color: '#2BB674',
        fontSize: 15,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 12,
        marginTop:4,
    },
    leaf: {
        width: 24,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    greeting: {
        color: '#786951',
        fontSize: 28,
        fontWeight: '600',
        width:266,
        position:'absolute',
        left:40,
        top:98
    },
    help: {
        color: '#786951',
        fontSize: 10,
        fontWeight: '500',
        textAlign: 'center',
        paddingTop: 2
    }
});

