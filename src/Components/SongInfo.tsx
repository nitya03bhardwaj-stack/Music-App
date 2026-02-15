import React, { PropsWithChildren } from 'react'
import {StyleSheet, Text, View} from 'react-native';

import {Track} from 'react-native-track-player'

type SongInfo = PropsWithChildren<{
    track : Track | null |undefined
}>

 const SongInfo = ({track} : SongInfo) => {
  return (
    <View style ={styles.container}>
        <View>
            <Text style = {styles.name}>
              {track ?.title}
            </Text>
            <Text style = {styles.artist}>
              {track ?.artist}  .  {track?.album}
            </Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    alignItems: 'center',
    marginTop: 15,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  artist: {
    marginTop: 6,
    fontSize: 16,
    color: '#cfcfcf',
    textAlign: 'center',
    opacity: 0.85,
  },
});




export default SongInfo