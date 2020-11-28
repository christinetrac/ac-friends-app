import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Icon, Divider } from 'react-native-elements';
import { getVillagers } from "../Data/fetchData";
import { GENDER, SPECIES_IMG } from "../Constants/constants";
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

    // GENDER SELECTIONS //

    const setGender = (gender) => {
        setVillagerGender(gender);
        setSelectGender(false);
        setSelectSpecies(true);
    };

    const girl = "girl";
    const gender = selectGender ? (
        <View>
            <Text style={styles.questionText}>Select a Gender</Text>
            <Divider style={{ backgroundColor: '#E6D2C1', height: 3 }} />
            <View style={styles.questionOptions}>
                <TouchableOpacity style={styles.questionOption} onPress={() => setGender(GENDER.female)}>
                    <Image source={require(`../Images/Gender/${girl}.png`)} style={styles.genderImg}/>
                    <Text style={styles.questionOptionsLabel}>Girl</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.questionOption} onPress={() => setGender(GENDER.male)}>
                    <Image source={require('../Images/Gender/boy.png')} style={styles.genderImg}/>
                    <Text style={styles.questionOptionsLabel}>Boy</Text>
                </TouchableOpacity>
            </View>
        </View>
    ) : <View/>;

    // SPECIES SELECTION //

    const setSpecies = (species) => {
        setVillagerSpecies(species);
        setFinalResults(getVillagers(props.villagerData, villagerGender, species));
        setSelectSpecies(false);
        setShowResults(true);
    };

    const speciesButtons = SPECIES_IMG.map(villager => (
        <TouchableOpacity onPress={() => setSpecies(villager.species)} key={villager.species}>
            <Image source={villager.file} style={styles.genderImg}/>
            <Text style={styles.questionOptionsLabel}>{villager.species}</Text>
        </TouchableOpacity>
    ));

    const species = selectSpecies ? (
        <View>
            <Text style={styles.questionText}>Select a Species</Text>
            <Divider style={{ backgroundColor: '#E6D2C1', height: 3 }} />
            <ScrollView>
                {speciesButtons}
            </ScrollView>
        </View>
    ) : <View/>;

    // VILLAGER SELECTION //

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
        <TouchableOpacity onPress={() => setVillager(villager)} key={villager.id}>
            <Image source={{uri: villager["icon_uri"]}} style={styles.genderImg}/>
            <Text style={styles.questionOptionsLabel}>{villager.name["name-USen"]}</Text>
        </TouchableOpacity>
    ))) : <Text/>;

    const results = showResults ? (
        <View>
            <Text style={styles.questionText}>Select a Villager</Text>
            <Divider style={{ backgroundColor: '#E6D2C1', height: 3 }} />
            <ScrollView>
                {villagerButtons}
            </ScrollView>
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
                            <Icon raised reverse name='clear' color='#54403E' size={20} onPress={() => {
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
        backgroundColor: "#F7EDE1",
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
        position: 'relative',
        maxHeight: 400,
        minWidth: 290,
    },
    closeButton: {
        position: 'absolute',
        top: -20,
        left: -20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    questionText: {
        fontSize: 20,
        color: "#54403E",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16
    },
    genderImg: {
        width: 70,
        height: 70,
        alignSelf: "center",
        marginTop: 5,
    },
    questionOptions: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 12
    },
    questionOption: {
        width: 110,
        height: 110,
    },
    questionOptionsLabel: {
        textAlign: "center",
        fontSize: 16,
        color: "#54403E",
        fontWeight: "bold",
    },
    speciesContainer: {
    }
});
