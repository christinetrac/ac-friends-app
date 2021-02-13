import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from "react-native-elements";
import {storeVillager} from "../Data/storage";
import {Header2} from "../Components/Header2";
import {getVillagerStatus} from "../Data/fetchData";

export const AddOldVillager = ({navigation, route}) => {
    const villager = route?.params?.villager;
    const level = route?.params?.level;
    const points = route?.params?.points;
    const status = getVillagerStatus(level);

    const addVillager = () => {
        const newVillager = {
            id: villager.id, name: villager.name["name-USen"],
            gender: villager.gender, species: villager.species,
            hobby: villager.hobby, icon: villager["icon_uri"],
            colour: villager["bubble-color"], birthday: villager["birthday-string"],
            gavePicture: false, pictureDate: null, personality: villager.personality,
            level: level, points: points, status: status
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
            <View style={styles.titleBox}>
                <Text style={[styles.title, {paddingBottom:40}]}>Based on our calculations...</Text>
                <Text style={[styles.title, {paddingBottom:40}]}>You and {villager.name["name-USen"]} are at friendship<Text style={{color:'#EF758A'}}> level {level}</Text></Text>
                <Text style={styles.title}>This means {villager.name["name-USen"]} considers you as a<Text style={{color:'#EF758A'}}> {status}</Text> <View>
                    <Icon name='favorite' size={21} color='#EF758A'/>
                </View></Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => addVillager()}>
                <Text style={styles.buttonText}>save</Text>
            </TouchableOpacity>
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
        textAlign: 'left',
        alignSelf: 'center',
        color: '#235E3E',
        fontSize: 24,
        fontWeight: '500',
        width:310
    },
    titleBox: {
        alignSelf: 'center',
        position:'absolute',
        top:247
    },
    heart: {
        marginTop:6
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
        borderRadius: 25,
        backgroundColor: '#2BB674',
        justifyContent: 'center',
        alignSelf:'center',
        position:'absolute',
        top:600
    }
});
