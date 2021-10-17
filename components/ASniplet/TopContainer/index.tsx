import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { SnipletType } from '../../../types';
import styles from './styles';
import { Audio } from 'expo-av';
import { Slider } from '@sharcoux/slider'
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStateOrAny, useSelector } from 'react-redux';

export type TopContainerProps = {
    sniplet: SnipletType;
    currentIndex: any;
    currentVisibleIndex: any;
    currentVisibleIndex2?: any;
    currentVisibleIndex3?: any;
    replyItem?: any;
}

const TopContainer = ({sniplet, currentIndex, currentVisibleIndex, replyItem}: TopContainerProps) => {

    const nav = useNavigation();
    const playing = useSelector((state: RootStateOrAny)=> state.playing)
    const [sound, setSound] = useState<any>(null);
    const [pendingSound, setpendingSound] = useState<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState<number|null>(null);
    const [position, setPosition] = useState<number>(0);
    const [shouldPlay, setShouldPlay] = useState<boolean>(true);

    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }
    
    const playCurrentAudio = async () => {
        if (sound) {
        await sound.unloadAsync();
        }
    }

    const playCurrentPendingAudio = async () => {
        if (pendingSound) {
            await pendingSound.unloadAsync();
            }
    }

    const playAudio = async () => {
        const { sound: newSound } = await Audio.Sound.createAsync(
            {uri: sniplet.audio},
            {shouldPlay: shouldPlay},
            onPlaybackStatusUpdate,
        )
        setSound(newSound)
        playCurrentAudio();
        playCurrentPendingAudio();
    }

    const playPendingAudio = async () => {
        const { sound: newSound } = await Audio.Sound.createAsync(
            {uri: sniplet.audio},
            {shouldPlay: true, volume: 0, isLooping: true},
            onPlaybackStatusUpdate,
        )
        setpendingSound(newSound)
        playCurrentAudio();
        playCurrentPendingAudio();
    }

    const progress = () => {
        if (duration == null || position == null) {
            return 0;
        }
        const currentPosition = ( position / duration) * 100;
        return currentPosition;
    }

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.pauseAsync();
        } else {
            await sound.playAsync();
        }
        }

    useEffect( () => {
        const unSubs = [
            nav.addListener('blur', () => setShouldPlay(false)),
            nav.addListener('focus', () => setShouldPlay(true)),
            ]
        
        if (currentVisibleIndex == currentIndex){
            playAudio();
        }
        else {
            playPendingAudio();
        }
        return () => unSubs.forEach((unSub) => {unSub()} );
    }, [currentIndex, currentVisibleIndex, nav, shouldPlay]);

    return (

    <View style={styles.mediaContainer}>
        <Text style={{paddingBottom: 11, paddingTop: 11}}>{sniplet.title}</Text>
        {!!sniplet.image && <Image style={styles.image} source={{uri: sniplet.image}}></Image>}
        <View style={styles.audioContainer}>
            <TouchableOpacity onPress={undefined}>
                <View style={{borderRadius: 4, width: 50, height: 50, borderWidth: 1, borderColor: '#d3d3d3'}}>
                    <Image style={{width: '100%', height: 48, borderRadius: 4}} source={{uri: sniplet.user.profileImage}}></Image>
                </View>
            </TouchableOpacity>
            <View style={{width: 300, marginLeft:-1, paddingLeft: 15}}>
                <Slider
                    value={progress()}                         
                    minimumValue={0}                  
                    maximumValue={100}                 
                    step={0}                        
                    minimumTrackTintColor={'#ffffff'}     
                    maximumTrackTintColor={currentIndex == currentVisibleIndex ? '#757575' : '#d3d3d3'}     
                    minTrackStyle={{borderWidth: 1.5, borderColor: '#d3d3d3', borderTopLeftRadius: 20, borderBottomLeftRadius: 20}} 
                    maxTrackStyle={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}} 
                    thumbTintColor='#ffffff'
                    thumbSize={0}
                    thumbStyle={{opacity: 0}}           
                    trackStyle={{height:10}}            
                    onValueChange={undefined}       
                    onSlidingStart={undefined}        
                    onSlidingComplete={undefined}
                    slideOnTap={true}                   
                />
            </View>
        </View>
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => nav.navigate('ViewProfile')}>
                    <Text style={styles.name}>{sniplet.user.name}</Text>
                </TouchableOpacity>
                <Text style={styles.createdAt}>{sniplet.createdAt}</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => nav.navigate('Replies', {tabState: "loops"})}>
                    <Text style={replyItem == "loops" ? {color: '#000000', fontSize: 13, fontWeight: 'bold'} : {color: '#BABABA', fontSize: 13, fontWeight: 'bold'}}>{sniplet.numberOfLoops} loops</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => nav.navigate('Replies', {tabState: "replies"})}>
                    <Text style={replyItem == "replies" ? {marginHorizontal: 8, fontSize: 13, color: '#000000', fontWeight: 'bold'} : {marginHorizontal: 8, fontSize: 13, color: '#BABABA', fontWeight: 'bold'}}>{sniplet.numberOfReplies} replies</Text>
                </TouchableOpacity>
                <Feather style={{marginLeft: 85, marginRight: 10}} name={"more-horizontal"} size={22} color={'#BABABA'}/>
                <Image style={{width: 21, height: 21, tintColor: "#bababa", marginRight: 10}} source={require('../../../assets/loops.png')} />
                <Image style={{width: 21, height: 21, tintColor: "#bababa", marginRight: 10}} source={require('../../../assets/reply.png')} />
                <Ionicons onPress={onPlayPausePress} style={{marginRight: 10}} name={isPlaying ? "pause" : "play"} size={22} color={currentIndex == currentVisibleIndex ? '#000000' : '#BABABA'}></Ionicons>
            </View>
        </View>
    </View>
    )
};

export default TopContainer;
