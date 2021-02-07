import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground} from 'react-native';
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
          <ImageBackground
              source={require("./assets/leafPattern.png")}
              style={{width: "100%", height: "100%"}}
              imageStyle={{opacity:0.3}}
          >
          <View style={styles.listContainer}>
            <VillagerDisplay villagerData={villagerData}/>
          </View>
          <AddVillager villagerData={villagerData}/>
          </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF6EC',
  },
  listContainer: {
    alignSelf: 'center',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
    width: 350,
    height: 720,
    paddingBottom: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
  }
});
