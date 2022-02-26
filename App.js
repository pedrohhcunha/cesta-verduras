import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cesta from './src/pages/Cesta';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Cesta />
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
