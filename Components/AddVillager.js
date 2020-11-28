import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal } from 'react-native';
import { Button, Icon } from 'react-native-elements';
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

    const gender = selectGender ? (
        <View>
            <Text>Is your villager a girl or boy?</Text>
            <Button title="Girl" type="clear" onPress={() => setGender(GENDER.female)}/>
            <Button title="Boy" type="clear" onPress={() => setGender(GENDER.male)}/>
        </View>
    ) : <View/>;

    const setSpecies = (species) => {
        setVillagerSpecies(species);
        setFinalResults(getVillagers(props.villagerData, villagerGender, species));
        setSelectSpecies(false);
        setShowResults(true);
    };

    const speciesButtons = getSpeciesList().map(species => (
        <Button key={species} title={species} type="clear" onPress={() => setSpecies(species)}/>
    ));

    const species = selectSpecies ? (
        <Text>
            <Text>What is the species of your villager?</Text>
            {speciesButtons}
        </Text>
    ) : <View/>;

    const setVillager = (villager) => {
        const newVillager = {id: villager.id, name: villager.name["name-USen"],
                            gender: villagerGender, species: villagerSpecies,
                            image: villager["image_uri"], icon: villager["icon_uri"],
                            colour: villager["bubble-color"], birthday: villager["birthday-string"]};
        storeVillager(newVillager).then();
        setShowResults(false);
        resetQuestions();
    };

    const villagerButtons = finalResults ? (finalResults.map(villager => (
        <Button key={villager.id} title={villager.name["name-USen"]} type="clear" onPress={() => setVillager(villager)}/>
    ))) : <Text/>;

    const results = showResults ? (
        <View>
            <Text>Which one is your villager?</Text>
            {villagerButtons}
        </View>
    ) : <View/>;

    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide"
                   transparent={true}
                   visible={visible}
                   onRequestClose={() => {
                       toggleOverlay(); resetQuestions()
                   }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {gender}
                        {species}
                        {results}
                        <View style={styles.closeButton}>
                            <Icon raised reverse name='clear' color='#235E3E' size={20} onPress={() => {
                                toggleOverlay(); resetQuestions()
                            }}/>
                        </View>
                    </View>
                </View>
            </Modal>
            <Icon raised name='add' color='#9ae3b4' style={styles.addButton} onPress={toggleOverlay}/>
        </View>
    );
};

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        zIndex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative'
    },
    closeButton: {
        position: 'absolute',
        top: -20,
        left: -20
    }
});
