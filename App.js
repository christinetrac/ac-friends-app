import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddVillager } from './Components/AddVillager';
import { VillagerDisplay } from "./Components/VillagerDisplay";

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
      <VillagerDisplay/>
      <AddVillager villagerData={villagerData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ae3b4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
