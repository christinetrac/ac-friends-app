import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from "react-native-elements";
import {Header2} from "../Components/Header2";
import React from "react";

export const Profile = ({navigation, route}) => {
    const villager = route?.params?.villager;

    const pronoun = () => {
        if(villager.gender === 'Male') return 'his';
        else return 'her'
    };

    const star = () => {
        if(villager.gavePicture) {
            return <Icon name='star' color='#F5C24A' size={50}/>
        } else {
            return <Icon name='star-border' color='#F5C24A' size={50}/>
        }
    };

    const visitDelete = () => {
        navigation.navigate('Delete', {villager:villager})
    };

    return (
        <View style={styles.container}>
            <Header2/>
            <View style={styles.backButtonContainer}>
                <Icon raised reverse name='arrow-back' color='#2BB674' onPress={() => {navigation.pop()}}/>
            </View>
            <View style={styles.deleteButtonContainer}>
                <Icon raised reverse name='clear' color='#F65555' onPress={() => visitDelete()}/>
            </View>
            <View style={[styles.circle, {borderColor:villager.colour}]}>
                <Image source={{uri: villager.icon}} style={styles.villagerImg}/>
            </View>
            <Text style={styles.title}>{villager.name} thinks of you as {pronoun()} <Text style={{color: '#EF758A', textTransform:'lowercase'}}>{villager.status}</Text></Text>
            <View style={styles.star}>
                {star()}
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
    deleteButtonContainer: {
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        position: 'absolute',
        top:60,
        right:30,
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
    circle: {
      height:140,
      width:140,
      borderRadius: 140,
      backgroundColor: '#fff',
      justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        alignSelf: 'center',
        top:60,
        borderWidth:5,
    },
    title: {
        fontSize:24,
        fontWeight:'500',
        textAlign:'center',
        color:'#786951',
        width:300,
        alignSelf: 'center',
        top:80
    },
    star: {
        alignSelf: 'center',
        top:82
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
