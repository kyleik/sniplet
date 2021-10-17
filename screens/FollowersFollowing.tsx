import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView, StatusBar,
} from 'react-native'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute  } from '@react-navigation/core';
import FollowersFollowingFeed from '../components/FollowersFollowingFeed';

const FollowersFollowing = () => {

    const navigation = useNavigation();
    let route: any = useRoute();
    const result = route.params?.tabState;

    return (
    <View style={StyleSheet.absoluteFill}>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={30} color={'#BABABA'} />
            </TouchableOpacity>
            <FollowersFollowingFeed theRoute={result}></FollowersFollowingFeed>
        </View>
    </View>
    );
}

export default FollowersFollowing;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
  }});