import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { getSpeciesList, getVillagers } from "../Data/fetchData";
import { GENDER } from "../Constants/constants";
import { storeVillager } from "../Data/storage";

export const AddVillager = (props) => {
    const [visible, setVisible] = useState(false);
    const [selectGender, setSelectGender] = useState(true);
    const [selectSpecies, setSelectSpecies] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [finalResults, setFinalResults] = useState("");

    const [villagerGender, setVillagerGender] = useState("");
    const [villagerSpecies, setVillagerSpecies] = useState("");

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const resetQuestions = () => {
        setSelectGender(true);
        setSelectSpecies(false);
        setShowResults(false);
        setFinalResults("");
        setVillagerGender("");
        setVillagerSpecies("");
    };

    const setGender = (gender) => {
        setVillagerGender(gender);
        setSelectGender(false);
        setSelectSpecies(true);
    };

    const gender = selectGender && (
        <Text style={styles.container}>
            Is your villager a girl or boy?
            <Button title="Girl" type="clear" onPress={() => setGender(GENDER.female)}/>
            <Button title="Boy" type="clear" onPress={() => setGender(GENDER.male)}/>
        </Text>
    );

    const setSpecies = (species) => {
        setVillagerSpecies(species);
        setFinalResults(getVillagers(props.villagerData, villagerGender, species));
        setSelectSpecies(false);
        setShowResults(true);
    };

    const speciesButtons = getSpeciesList().map(species => (
        <Button key={species} title={species} type="clear" onPress={() => setSpecies(species)}/>
    ));

    const species = selectSpecies && (
        <Text style={styles.container}>
            What is the species of your villager?
            {speciesButtons}
        </Text>
    );

    const setVillager = (name) => {
        const villager = {name: name, gender: villagerGender, species: villagerSpecies};
        storeVillager(villager).then();
        setShowResults(false);
        resetQuestions();
    };

    const villagerButtons = finalResults && (finalResults.map(villager => (
        <Button key={villager.id} title={villager.name["name-USen"]} type="clear" onPress={() => setVillager(villager.name["name-USen"])}/>
    )));

    const results = showResults && (
        <Text style={styles.container}>
            Which one is your villager?
            {villagerButtons}
        </Text>
    );

    return (
        <View>
            <Button title="Add Villager..." type="clear" onPress={toggleOverlay} />
            <Overlay isVisible={visible} onBackdropPress={() => {toggleOverlay(); resetQuestions()}}>
                <Text style={styles.container}>
                    {gender}
                    {species}
                    {results}
                </Text>
            </Overlay>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 600
    },
});
