import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from "react-native-elements";
import {Header1} from "../Components/Header1";
import React from "react";

export const NeedHelp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header1/>
            <View style={styles.backButtonContainer}>
                <Icon raised reverse name='arrow-back' color='#2BB674' onPress={() => {navigation.pop()}}/>
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
});
