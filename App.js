import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './Navigation/StackNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF6EC',
  }
});
