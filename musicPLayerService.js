import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";

import {PlayListData} from './src/Constants'

export async function SetUpPlayer() {
   let IsSetUp = false ;
   try {
      await TrackPlayer.getActiveTrack()
       IsSetUp = true;
   } catch (error) {
     await TrackPlayer.setupPlayer()
       IsSetUp =  true;
   }finally{
     return IsSetUp ;
   }
}

export  async function AddTrack() {
    await TrackPlayer.add(PlayListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePlay , () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemotePause , () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious , () => {
        TrackPlayer.skipToPrevious()
    })

    TrackPlayer.load(Event.RemoteNext , () => {
        TrackPlayer.skipToNext()
    })
}
