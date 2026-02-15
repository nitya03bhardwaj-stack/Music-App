import React from 'react'
import Slider from '@react-native-community/slider'
import { useProgress } from 'react-native-track-player'
import { View,StyleSheet,Text } from 'react-native'


const SongSlider = () => {
  const {position,duration} = useProgress()

  return (
    <View>
       <Slider
       value={position}
       minimumValue={0}
       maximumValue={duration}
       thumbTintColor='#1DB954'
       maximumTrackTintColor='#777'
       minimumTrackTintColor='#1DB954'
       style = {styles.sliderContainer}
       />
       <View style={styles.timeContainer}>
         <Text style = {styles.time}>
           {new Date(position*1000).toISOString().substring(15,19)}
         </Text>
         <Text style = {styles.time}>
           {new Date((duration-position)*1000).toISOString().substring(15,19)}
         </Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: 320,
    height: 40,
    marginTop: 25,
  },

  timeContainer: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -8,
  },

  time: {
    color: '#fff',
    fontSize: 13,
    opacity: 0.7,
  },
});



export default SongSlider

