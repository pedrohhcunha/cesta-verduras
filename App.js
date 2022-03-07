import React from 'react';

import { StatusBar, SafeAreaView} from 'react-native';

import Cesta from './src/pages/Cesta';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading'

export default function App() {
  const [fonteCarregda] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!fonteCarregda){
    return <AppLoading />
  }
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Cesta />
    </SafeAreaView>
  );
}