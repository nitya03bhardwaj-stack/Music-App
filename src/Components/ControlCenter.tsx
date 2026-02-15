import React from 'react'
import { View , StyleSheet, Pressable} from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from '@react-native-vector-icons/fontawesome'





 const ControlCenter = () => {
  
    const playBackState = usePlaybackState()

    const SkipToNext = async () => {
        await TrackPlayer.skipToNext()
    }
    const SkipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }
    
    const toggle = async (playback:State | undefined) => {
        const CurrentTrack = await TrackPlayer.getActiveTrack()

        if (CurrentTrack !== null && playback != undefined) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            }else{
                await TrackPlayer.pause()
            }
        }
    }
        
    

  return (
 <View style={styles.container}>

  <Pressable onPress={SkipToPrevious}>
    <Icon name="step-backward" size={32} style={styles.icon}/>
  </Pressable>

  <Pressable 
    style={styles.playButton}
    onPress={() => toggle(playBackState.state)}
  >
    <Icon
      name={playBackState.state === State.Playing ? 'pause' : 'play'}
      size={40}
      style={styles.icon}
    />
  </Pressable>

  <Pressable onPress={SkipToNext}>
    <Icon name="step-forward" size={32} style={styles.icon}/>
  </Pressable>

</View>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    gap: 40, 
  },

  icon: {
    color: '#fff',
  },

  playButton: {
    backgroundColor: '#1db954',
    width: 85,
    height: 85,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 8,
    shadowColor: '#1db954',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
});



export default ControlCenter

