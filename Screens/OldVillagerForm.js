import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon, CheckBox} from "react-native-elements";
import {Header2} from "../Components/Header2";

export const OldVillagerForm = ({navigation, route}) => {
    const villager = route?.params?.villager;

    const [lv2, setLv2] = useState(false);
    const [lv3, setLv3] = useState(false);
    const [lv3again, setLv3Again] = useState(false);
    const [lv4, setLv4] = useState(false);
    const [lv5, setLv5] = useState(false);
    const [lv6, setLv6] = useState(false);
    const [lv6again, setLv6Again] = useState(false);

    const calculation = () => {
        if(lv6 || lv6again) {
            navigation.navigate('AddOldVillager', {villager:villager, level:6, points:200});
        } else if (lv5) {
            navigation.navigate('AddOldVillager', {villager:villager, level:5, points:150});
        } else if (lv4) {
            navigation.navigate('AddOldVillager', {villager:villager, level:4, points:100});
        } else if (lv3 || lv3again) {
            navigation.navigate('AddOldVillager', {villager:villager, level:3, points:60});
        } else if (lv2) {
            navigation.navigate('AddOldVillager', {villager:villager, level:2, points:30});
        } else {
            navigation.navigate('AddOldVillager', {villager:villager, level:1, points:25});
        }
    };

    return (
        <View style={styles.container}>
            <Header2/>
            <View style={styles.backButtonContainer}>
                <Icon raised reverse name='arrow-back' color='#2BB674' onPress={() => {navigation.pop()}}/>
            </View>
            <Text style={styles.title}>Let’s get a rough estimate of your friendship level with this villager.</Text>
            <Text style={styles.subtitle}>check all that apply</Text>
            <View style={styles.checkboxGroup}>
                <CheckBox checked={lv2}
                          onPress={() => setLv2(!lv2)}
                          textStyle={styles.questionText}
                          containerStyle={styles.questionBox}
                          checkedColor={'#786951'}
                          uncheckedColor={'#786951'}
                          title={'do you have the option of giving this villager a daily gift?'}
                />
                <CheckBox checked={lv3}
                          onPress={() => setLv3(!lv3)}
                          textStyle={styles.questionText}
                          containerStyle={styles.questionBox}
                          checkedColor={'#786951'}
                          uncheckedColor={'#786951'}
                          title={'have they tried selling you an item before?'}
                />
                <CheckBox checked={lv3again}
                          onPress={() => setLv3Again(!lv3again)}
                          textStyle={styles.questionText}
                          containerStyle={styles.questionBox}
                          checkedColor={'#786951'}
                          uncheckedColor={'#786951'}
                          title={'HAVE THEY GIVEN YOU A NICKNAME YET?'}
                />
                <CheckBox checked={lv4}
                          onPress={() => setLv4(!lv4)}
                          textStyle={styles.questionText}
                          containerStyle={styles.questionBox}
                          checkedColor={'#786951'}
                          uncheckedColor={'#786951'}
                          title={'HAVE THEY ASKED YOU TO CHANGE THEIR CATCHPHRASE BEFORE?'}
                />
                <CheckBox checked={lv5}
                          onPress={() => setLv5(!lv5)}
                          textStyle={styles.questionText}
                          containerStyle={styles.questionBox}
                          checkedColor={'#786951'}
                          uncheckedColor={'#786951'}
                          title={'have they asked you to change their greeting yet?'}
                />
                <CheckBox checked={lv6}
                            onPress={() => setLv6(!lv6)}
                            textStyle={styles.questionText}
                            containerStyle={styles.questionBox}
                            checkedColor={'#786951'}
                            uncheckedColor={'#786951'}
                            title={'have they tried to buy anything from your inventory before?'}
                />
                <CheckBox checked={lv6again}
                          onPress={() => setLv6Again(!lv6again)}
                          textStyle={styles.questionText}
                          containerStyle={styles.questionBox}
                          checkedColor={'#786951'}
                          uncheckedColor={'#786951'}
                          title={'have they tried to trade something for an item in your inventory?'}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => calculation()}>
                <Text style={styles.buttonText}>next</Text>
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
        textAlign: 'center',
        alignSelf: 'center',
        top:150,
        color: '#235E3E',
        fontSize: 24,
        fontWeight: '500',
        width:280,
        position:'absolute',
    },
    subtitle: {
        textAlign: "center",
        fontSize: 10,
        color: "#786951",
        fontWeight: "500",
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        top:245,
        width:273,
        alignSelf: 'center',
        position:'absolute'
    },
    questionText: {
        textAlign: "left",
        fontSize: 12,
        color: "#786951",
        fontWeight: "500",
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        width:260,
    },
    questionBox: {
        backgroundColor: '#FEF6EC',
        borderColor:'transparent',
    },
    checkboxGroup: {
        position:'absolute',
        alignSelf:'center',
        top:290
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
        bottom:80
    }
});
