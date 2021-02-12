import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import {Icon} from "react-native-elements";
import {GENDER} from "../Constants/constants";
import {Header2} from "../Components/Header2";

export const SelectGender = ({navigation, route}) => {
    const villagerData = route?.params?.villagerData;

    const setGender = (gender) => {
        navigation.navigate('SelectSpecies', {villagerData:villagerData, villagerGender:gender});
    };

    return (
        <View style={styles.container}>
            <Header2/>
            <View style={styles.backButtonContainer}>
                <Icon raised reverse name='arrow-back' color='#2BB674' onPress={() => {navigation.pop()}}/>
            </View>
            <Text style={styles.title}>Select Gender</Text>
            <View style={styles.questionOptions}>
                <TouchableOpacity style={styles.questionOption} onPress={() => setGender(GENDER.female)}>
                    <Image source={require(`../Images/Gender/girl.png`)} style={styles.villagerImg}/>
                    <Text style={styles.questionOptionsLabel}>Girl</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.questionOption} onPress={() => setGender(GENDER.male)}>
                    <Image source={require('../Images/Gender/boy.png')} style={styles.villagerImg}/>
                    <Text style={styles.questionOptionsLabel}>Boy</Text>
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
    questionOptions: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: 250,
        alignSelf: 'center',
        top: 290
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
