import React, { useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import TrackPlayer ,{Event,useTrackPlayerEvents,Track}from 'react-native-track-player'; 
import { PlayListData } from '../Constants';
import SongInfo from '../Components/SongInfo';
import SongSlider from '../Components/SongSlider';
import ControlCenter from '../Components/ControlCenter';




const {width} = Dimensions.get('window')

const MusicPlayer = () => {

    const [Track,SetTrack] = useState<Track | null>()

    const RenderArtWOrk = () => {
        return(
            <View style = {styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {Track?.artwork && (
                        <Image
                        style={styles.albumArtImg}
                        source={{uri:Track?.artwork?.toString()}}
                        />
                    )}
                </View>
            </View>
        )
    }

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackTrackChanged:
               const PlayingTrack = await TrackPlayer.getTrack(event.nextTrack)
               SetTrack(PlayingTrack)
                break;
        }
    })


  return (
    <View style ={styles.container}>
        <FlatList
        horizontal 
        data={PlayListData}
        renderItem={RenderArtWOrk}
        keyExtractor={song => song.id.toString()}
        />
        <SongInfo track={Track}/>
        <SongSlider/>
        <ControlCenter/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001d23',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 25,
  },

  listArtWrapper: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  albumContainer: {
    width: 280,
    height: 280,
    borderRadius: 20,
    overflow: 'hidden',

    elevation: 12,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
  },

  albumArtImg: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});




export default MusicPlayer
