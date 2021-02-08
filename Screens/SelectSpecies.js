import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from "react-native-elements";
import {SPECIES_IMG} from "../Constants/constants";

export const SelectSpecies = ({navigation, route}) => {
    const villagerData = route?.params?.villagerData;
    const villagerGender = route?.params?.villagerGender;

    const setSpecies = (species) => {
        navigation.navigate('SelectVillager', {villagerData:villagerData, villagerGender:villagerGender, villagerSpecies:species});
    };

    function speciesButtons() {
        let content = [], columns = [];
        SPECIES_IMG.forEach((villager, i) => {
            columns.push(
                <TouchableOpacity onPress={() => setSpecies(villager.species)} key={villager.species} style={{ marginBottom: 20}}>
                    <Image source={villager.file} style={styles.villagerImg}/>
                    <Text style={styles.questionOptionsLabel}>{villager.species}</Text>
                </TouchableOpacity>
            );
            if((i+1)%2 === 0) {
                content.push(
                    <View style={styles.questionOptions}>
                        {columns}
                    </View>
                );
                columns = [];
            }
        });
        content.push(
            <View style={styles.questionOptions}>
                <TouchableOpacity onPress={() => setSpecies(SPECIES_IMG[SPECIES_IMG.length-1].species)} key={SPECIES_IMG[SPECIES_IMG.length-1].species} style={{ marginBottom: 20}}>
                    <Image source={SPECIES_IMG[SPECIES_IMG.length-1].file} style={styles.villagerImg}/>
                    <Text style={styles.questionOptionsLabel}>{SPECIES_IMG[SPECIES_IMG.length-1].species}</Text>
                </TouchableOpacity>
            </View>
        );
        return content;
    }

    return (
      <View style={styles.container}>
          <View style={styles.backButtonContainer}>
              <Icon raised reverse name='arrow-back' color='#2BB674' onPress={() => {navigation.pop()}}/>
          </View>
          <Text style={styles.title}>Select Species</Text>
          <ScrollView style={{ width: 300, alignSelf:'center', top:170, height:630, position:'absolute'}}>
              {speciesButtons()}
          </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7EDE1',
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
        top:107,
        color: '#235E3E',
        fontSize: 24,
        fontWeight: '500',
    },
    questionOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 230,
        alignSelf: 'center'
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
