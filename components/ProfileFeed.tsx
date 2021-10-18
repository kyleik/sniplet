import React, {useState, useEffect, useRef, useContext, useCallback} from 'react';
import { StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SectionList, } from 'react-native';
  
import sniplets from '../data/sniplets';
import ASniplet from '../components/ASniplet';
  
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProfileItem from '../components/ProfileItem';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const ProfileFeed = () => {

const [viewedItems, setViewedItems] = useState([]);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const [tabState, setTabState] = useState<string>("sniplets");
  
  const ProfileItem = () => {

    const navigation = useNavigation();
      
    const PostDetail = ({ value, detail }) => {
        return (
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#BABABA', fontWeight: 'bold'}}>{value}</Text>
            <Text style={{color: '#BABABA', fontWeight: 'bold'}}> {detail}</Text>
          </View>
        );
      };
      
  return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
        <View style={{ flexDirection: "row", width: "100%", paddingTop: 68 }}>
            <Image
              style={{ height: 100, width: 100, borderRadius: 4, borderWidth: 1, borderColor: '#d3d3d3' }}
              source={{ uri: undefined }}
              resizeMode="cover"
            />
            <View style={{flexDirection: "row", paddingLeft: 15, justifyContent: 'space-between', width: 262,}}>
              <TouchableOpacity style={{borderWidth: 1, borderColor: '#d3d3d3', width: 35, height: 35, borderRadius: 5, justifyContent: 'center', alignItems:'center'}}>
                <Fontisto name={'pause'} size={13.5} color={'#000000'}></Fontisto>
              </TouchableOpacity>
              <TouchableOpacity style={{borderWidth: 1, borderColor: '#d3d3d3', width: 200, height: 35, borderRadius: 5, justifyContent: 'center', alignItems:'center'}}>
                <Text>Follow</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{ paddingTop: 10 }}>
          <View style={{ flexDirection: "column", width: '100%' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Kid Cudi</Text>
            <Text style={{color: '#4DB5F8', fontWeight: 'bold'}}>sniplet.com</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: 220, height: 30, justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.navigate('FollowersFollowing', {tabState: "followers"})}>
            <PostDetail value={16833} detail="Followers" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FollowersFollowing', {tabState: "following"})}>
            <PostDetail value={2040} detail="Following" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 130, height: 30,}}>
          <TouchableOpacity onPress={() => setTabState("sniplets")}>
            <Text style={ tabState == "sniplets" ? {color: '#000000', fontWeight: 'bold', fontSize: 15} : {color: '#BABABA', fontWeight: 'bold', fontSize: 15}}>Sniplets</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTabState("samples") }>
            <Text style={tabState == "samples" ? {color: '#000000', fontWeight: 'bold', fontSize: 15} : {color: '#BABABA', fontWeight: 'bold', fontSize: 15}}>Samples</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    setViewedItems(oldViewedItems => {

      let newViewedItems = null;

      changed.forEach(({ index, isViewable }) => {
        if (index != null && isViewable && !oldViewedItems.includes(index)) {
          
           if (newViewedItems == null) {
             newViewedItems = [...oldViewedItems];
           
           newViewedItems.push(index);
        }
      }});
      
    if (viewableItems && viewableItems.length > 0) {
      setCurrentVisibleIndex(viewableItems[0].index);
    }


      return newViewedItems == null ? oldViewedItems : newViewedItems;
    });
  }, []);

  const viewabilityConfig = {
      viewAreaCoveragePercentThreshold: 30,
      minimumViewTime: 1,
      waitForInteraction: false,
    }

  return (
    <View style={{width: '100%', height: '100%', flex: 1}}>
      <View style={styles.container}>
        <FlatList data={sniplets}
        renderItem={({item, index}) => {
          return (
        index == 0 ? (<ProfileItem></ProfileItem>) : tabState == "sniplets" ? (<ASniplet currentVisibleIndex={currentVisibleIndex} currentIndex={index} sniplet={item}/>)
        : tabState == "samples" ? (null) : null
          )
        }
      }
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 30,
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    header: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    },
    editLine: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 10,
    },
    editButton: {
      borderWidth: 1,
      borderColor: '#d3d3d3',
      width: "500",
      borderRadius: 5,
    },
    categoryLine: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    scene: {
      flex: 1,
    },
  });
  
export default ProfileFeed;
