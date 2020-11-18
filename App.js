import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GENDER, SPECIES } from "./Constants/constants";
import { getGenderVillagers, getSpeciesVillagers } from './Data/fetchData';
// import { Button } from 'react-native-elements';
import { AddVillager } from './Components/AddVillager';

export default function App() {
  const [villagerData, setVillagerData] = useState([]);

  function fetchVillagersData() {
    fetch('https://acnhapi.com/v1a/villagers')
        .then((response) => response.json())
        .then((json) => setVillagerData(json))
        .catch((error) => console.error(error))
  }
  useEffect(()=> {
    fetchVillagersData();
  });

  return (
    <View style={styles.container}>
      <Text>This is my AC app!</Text>
      <AddVillager villagerData={villagerData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
