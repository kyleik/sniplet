import React, {useState, useEffect, useRef, useContext, useCallback} from 'react';
import { StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SectionList, } from 'react-native';
import sniplets from '../data/sniplets';
import ASniplet from '../components/ASniplet';
import { useNavigation } from '@react-navigation/native';
import {SnipletType} from '../types';
import TopContainer from '../components/ASniplet/TopContainer';

export type ASnipProps = {
  theRoute: any;
}

export type AnotherSnipProps = {
  sniplet: SnipletType;
  currentIndex: any;
  currentVisibleIndex: any;
}

const ReplyFeed = ({theRoute}: ASnipProps) => {

  const [viewedItems, setViewedItems] = useState([]);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
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
            width: width,
            textAlign: "left",
            fontWeight: 'bold',
          }}
        >{text}
        </Text>
      </View>
    )
  };


  useEffect( () => {

    setTabState(theRoute);


  }, [theRoute])

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

  const ReplyItem = ({sniplet, currentIndex, currentVisibleIndex}: AnotherSnipProps) => {

    const navigation = useNavigation();
  
    return (
      <View style={{borderTopWidth: 0.5, borderColor: '#d3d3d3', paddingTop: 20, paddingBottom: 20}}>
          <View style={styles.replyContainer}>
            <TopContainer replyItem={theRoute} currentIndex={currentIndex} currentVisibleIndex={currentVisibleIndex} sniplet={sniplet}></TopContainer>
          </View>
      </View>
  )
  }



  return (
    <View style={styles.container}>
      <FlatList data={sniplets}
      renderItem={({item, index}) => {
        return (
      index == 0 ? (<ASniplet replyItem={theRoute} currentVisibleIndex={currentVisibleIndex} currentIndex={index} sniplet={item}/>) : tabState == "replies" ? (<ASniplet currentVisibleIndex={currentVisibleIndex} currentIndex={index} sniplet={item}/>)
      : tabState == "loops" ? <UserItem imageUri={"https://picsum.photos/200"} text={"Cactus Jack"}></UserItem> : null )}}
      keyExtractor={(item) => item.id}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      initialScrollIndex={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({

     replyContainer: {
      flexDirection: 'row',
      marginVertical: 5,
    },
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
    notification: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
    },
  });
  
export default ReplyFeed;