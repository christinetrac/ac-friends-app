import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from "react-native-elements";
import {storeVillager} from "../Data/storage";
import {STATUS} from "../Constants/constants";
import {Header2} from "../Components/Header2";

export const AddNewVillager = ({navigation, route}) => {
    const villager = route?.params?.villager;

    const addVillager = (villager) => {
        const newVillager = {
            id: villager.id, name: villager.name["name-USen"],
            gender: villager.gender, species: villager.species,
            hobby: villager.hobby, icon: villager["icon_uri"],
            colour: villager["bubble-color"], birthday: villager["birthday-string"],
            gavePicture: false, pictureDate: null, personality: villager.personality,
            level: 1, points:25, status: STATUS.friends
        };
        storeVillager(newVillager).then();
        navigation.navigate('Dashboard');
    };

    return (
        <View style={styles.container}>
            <Header2/>
            <View style={styles.backButtonContainer}>
                <Icon raised reverse name='arrow-back' color='#2BB674' onPress={() => {navigation.pop()}}/>
            </View>
            <Text style={styles.title}>Is This Villager New?</Text>
            <Text style={styles.subtitle}>
                they have just moved in or you have not interacted with them yet
            </Text>
            <Image source={{uri: villager["icon_uri"]}} style={styles.villagerImg}/>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} onPress={() => addVillager(villager)}>
                    <Text style={styles.buttonText}>yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>no</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEF6EC',
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
        top:235,
        color: '#235E3E',
        fontSize: 24,
        fontWeight: '500',
    },
    subtitle: {
        textAlign: "center",
        fontSize: 10,
        color: "#786951",
        fontWeight: "500",
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        top:250,
        width:273,
        alignSelf: 'center'
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
        top: 290
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 235,
        alignSelf: 'center',
    },
    buttonText: {
        color:'#fff',
        textTransform: 'uppercase',
        fontSize:14,
        fontWeight:'500',
        letterSpacing: 0.8,
        textAlign: 'center',
    },
    button: {
        width:100,
        height:45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        top: 330,
        borderRadius: 25,
        backgroundColor: '#2BB674',
        justifyContent: 'center'
    }
});
