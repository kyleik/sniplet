import * as React from 'react';
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute  } from '@react-navigation/core';
import Feed from '../components/Feed';
import { SnipletType } from '../types';
import sniplets from '../data/sniplets';
import ReplyFeed from '../components/ReplyFeed';
import { setFalse } from '../redux/actions'
import { useDispatch } from 'react-redux';

export type RepliesProps = {
    sniplet: SnipletType;
}

const Replies = ({sniplet}: RepliesProps, ) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    let route: any = useRoute();

    const result = route.params?.tabState;
    const goBack = () => {

      navigation.goBack();
      dispatch(setFalse);
      
    }

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="chevron-back-outline" size={30} color={'#BABABA'} />
        </TouchableOpacity>    
      </View>
      <ReplyFeed theRoute={result}></ReplyFeed>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingLeft: 25,
      backgroundColor: 'white'
    },
    headerContainer: {
      width: '100%',
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'white',
    },
    button: {
    },
    buttonText: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: '#BABABA',
      fontWeight: 'bold',
      fontSize: 16
    },
    newTweetContainer: {
      flexDirection: 'row',
      padding: 15,
    },
    inputsContainer: {
      marginLeft: 10,
    },
    pickImage: {
      fontSize: 18,
      marginVertical: 10,
    },
    image: {
      width: 150,
      height: 150,
    }
  });

export default Replies;