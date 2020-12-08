import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, Dimensions} from 'react-native';
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
      <SafeAreaView style={{ flex: 1, backgroundColor: "#93CEAC" }}>
        <View style={styles.container}>
          <Text style={styles.dateText}>{new Date().toDateString()}</Text>
          <View style={styles.listContainer}>
            <VillagerDisplay villagerData={villagerData}/>
          </View>
          <AddVillager villagerData={villagerData}/>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93CEAC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#F7EDE1',
    width: '90%',
    height: Dimensions.get('window').height - 100,
    padding: 14,
    paddingTop: 24,
    paddingBottom: 32,
  },
  dateText: {
    textAlign: 'left',
    fontSize: 26,
    color: "#235E3E",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10
  }
});
