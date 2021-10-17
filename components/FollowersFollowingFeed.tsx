import React, {useState, useEffect, useRef, useContext, useCallback} from 'react';
import { StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SectionList, } from 'react-native';
import SearchBar from './SearchBarTest';
import sniplets from '../data/sniplets';
import { useNavigation } from '@react-navigation/native';

export type props = {
    theRoute: any;
}

const FollowersFollowingFeed = ({theRoute}: props) => {

    const navigation = useNavigation();
    const [tabState, setTabState] = useState<string>();
    const width = Dimensions.get("window").width;

    const UserItem = ({ imageUri, text}) => {
      return (
        <View style={styles.notification}>
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 4,
            }}
            source={{ uri: imageUri }}
            resizeMode="cover"
          />
    
          <Text
            style={{
              paddingLeft: 10,
              width: '100%',
              textAlign: "left",
              fontWeight: 'bold',
            }}
          >{text}
          </Text>
        </View>
      )
    };

    useEffect(() => {

      setTabState(theRoute);

    }, [theRoute])
  
    return (
      <View style={styles.container}>

        <Text style={{ fontSize: 30, fontWeight: 'bold'}}>Robyn</Text>
        <View style={{flexDirection: 'row', width: 150, height: 30, justifyContent: 'space-between'}}>      
          <TouchableOpacity onPress={() => navigation.navigate('FollowersFollowing', {tabState: "followers"})}>
            <Text style={tabState == "followers" ? {color: '#000000', fontWeight: 'bold'} : {color: '#BABABA', fontWeight: 'bold'}}>followers</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => navigation.navigate('FollowersFollowing', {tabState: "following"})}>
            <Text style={tabState == "following" ? {color: '#000000', fontWeight: 'bold'} : {color: '#BABABA', fontWeight: 'bold'}}>following</Text>
          </TouchableOpacity> 
        </View>
        <FlatList 
          style={{width: '100%'}} 
          data={sniplets}
          renderItem={({index}) => {
              return ( index == 0 ? <SearchBar></SearchBar> :
          tabState == "followers" ? <UserItem imageUri={"https://picsum.photos/300"} text={"Robyn"}></UserItem> : 
          tabState == "following" ? <UserItem imageUri={"https://picsum.photos/400"} text={"Robyn"}></UserItem> : null
              )
          }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 30,
      backgroundColor: 'white',
      justifyContent: 'center'
    },
    notification: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
      },
})

export default FollowersFollowingFeed;