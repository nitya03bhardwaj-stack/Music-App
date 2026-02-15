import { StatusBar, StyleSheet, useColorScheme, View ,Text, ActivityIndicator, SafeAreaView} from 'react-native';

import React,{useState,useEffect} from 'react';

import {SetUpPlayer,AddTrack} from '../musicPLayerService'
import MusicPlayer from './Screens/MusicPlayer';


function App() {
  
  const[IsReady,SetIsReady] = useState(false)

  async function Setup() {
    let IsSetUp = await SetUpPlayer()

    if (IsSetUp) {
      await AddTrack()
    }
    SetIsReady(IsSetUp)
  }

  useEffect(() => {
   Setup()
  }, )

  if (!IsReady) {
   return (
    <SafeAreaView>
    <ActivityIndicator/>
    </SafeAreaView>
      
   )
  }
  

    return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <MusicPlayer/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text:{
    color:'#ffff'
  }
});

export default App;