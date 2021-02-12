import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Icon, Divider} from "react-native-elements";
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
            <View style={[styles.dividerGroup, {top:330}]}>
                <Text style={styles.dividerText}>friendship info</Text>
                <Divider style={styles.divider}/>
            </View>
            <View style={[styles.boxGroup, {top:365}]}>
                <View style={[styles.box, {borderColor:villager.colour}]}>
                    <Text style={styles.label}>level</Text>
                    <Text style={styles.info1}>{villager.level}</Text>
                </View>
                <View style={[styles.box, {borderColor:villager.colour}]}>
                    <Text style={styles.label}>points</Text>
                    <Text style={styles.info1}>{villager.points}</Text>
                </View>
            </View>
            <View style={[styles.dividerGroup, {top:490}]}>
                <Text style={styles.dividerText}>villager info</Text>
                <Divider style={styles.divider}/>
            </View>
            <View style={[styles.boxGroup, {top:530}]}>
                <View style={[styles.box, {borderColor:villager.colour}]}>
                    <Text style={styles.label}>class</Text>
                    <Text style={styles.info2}>{villager.gender} {villager.species}</Text>
                </View>
                <View style={[styles.box, {borderColor:villager.colour}]}>
                    <Text style={styles.label}>personality</Text>
                    <Text style={styles.info2}>{villager.personality}</Text>
                </View>
            </View>
            <View style={[styles.boxGroup, {top:655}]}>
                <View style={[styles.box, {borderColor:villager.colour}]}>
                    <Text style={styles.label}>birthday</Text>
                    <Text style={styles.info2}>{villager.birthday}</Text>
                </View>
                <View style={[styles.box, {borderColor:villager.colour}]}>
                    <Text style={styles.label}>hobby</Text>
                    <Text style={styles.info2}>{villager.hobby}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>add interaction</Text>
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
    dividerGroup: {
        position:'absolute',
        alignSelf:'center'
    },
    dividerText: {
        color: '#C7B2A0',
        textTransform: 'uppercase',
        fontSize: 10,
        letterSpacing: 0.8,
        fontWeight:'500',
        paddingBottom:4
    },
    divider: {
        backgroundColor: '#E6D2C1',
        height:2,
        width:350
    },
    box: {
        width:150,
        height:100,
        backgroundColor:'#fff',
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        borderWidth:5
    },
    boxGroup: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: 'center',
        width:350,
        position: 'absolute'
    },
    label: {
        color:'#786951',
        fontSize:12,
        letterSpacing: 0.8,
        fontWeight:'500',
        position:'absolute',
        textTransform: 'uppercase',
        alignSelf:'center',
        textAlign:'center',
        top:10
    },
    info1: {
        color:'#235E3E',
        fontSize:36,
        fontWeight:'500',
        position:'absolute',
        alignSelf:'center',
        textAlign:'center',
        top:32
    },
    info2: {
        color:'#235E3E',
        fontSize:18,
        fontWeight:'500',
        position:'absolute',
        alignSelf:'center',
        textAlign:'center',
        width:95,
        top:32
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
        width:200,
        height:45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        bottom: 55,
        borderRadius: 25,
        backgroundColor: '#2BB674',
        justifyContent: 'center',
        alignSelf:'center',
        position:'absolute'
    }
});
