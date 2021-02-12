import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from "react-native-elements";
import {Header2} from "../Components/Header2";
import React from "react";

export const Delete = ({navigation, route}) => {
    const villager = route?.params?.villager;

    return (
        <View style={styles.container}>
            <Header2/>
            <View style={styles.backButtonContainer}>
                <Icon raised reverse name='arrow-back' color='#2BB674' onPress={() => {navigation.pop()}}/>
            </View>
            <Text style={styles.title}>Are you sure you want to delete <Text style={{color: '#EF758A'}}>{villager.name}</Text>?</Text>
            <Text style={styles.subtitle}>you cannot undo this action</Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
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
        fontSize:24,
        fontWeight:'500',
        textAlign:'center',
        color:'#786951',
        width:310,
        alignSelf: 'center',
        top:260
    },
    subtitle: {
        textAlign: "center",
        fontSize: 10,
        color: "#786951",
        fontWeight: "500",
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        top:324,
        width:273,
        alignSelf: 'center',
        position:'absolute'
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
        top: 320,
        borderRadius: 25,
        backgroundColor: '#2BB674',
        justifyContent: 'center'
    }
});
