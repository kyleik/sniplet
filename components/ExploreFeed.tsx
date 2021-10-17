import React, {useState, useEffect, useRef, useContext, useCallback} from 'react';
import { StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SectionList, } from 'react-native';

import sniplets from '../data/sniplets';
import ASniplet from '../components/ASniplet';

const ExploreFeed = () => {

  const [viewedItems, setViewedItems] = useState([]);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const [tabState, setTabState] = useState<string>("onrepeat");

  const ExploreTabs = () => {
  
    return (

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.header}>
            <View style={{flexDirection: 'row', width: 665, height: 80, justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => setTabState("onrepeat")}>
                <Text style={ tabState == "onrepeat" ? {color: '#000000', fontWeight: 'bold', fontSize: 29} : {color: '#BABABA', fontWeight: 'bold', fontSize: 29}}>On Repeat</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTabState("comedy") }>
                <Text style={tabState == "comedy" ? {color: '#000000', fontWeight: 'bold', fontSize: 29} : {color: '#BABABA', fontWeight: 'bold', fontSize: 29}}>Comedy</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTabState("music") }>
                <Text style={tabState == "music" ? {color: '#000000', fontWeight: 'bold', fontSize: 29} : {color: '#BABABA', fontWeight: 'bold', fontSize: 29}}>Music</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTabState("sports") }>
                <Text style={tabState == "sports" ? {color: '#000000', fontWeight: 'bold', fontSize: 29} : {color: '#BABABA', fontWeight: 'bold', fontSize: 29}}>Sports</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTabState("mostsampled") }>
                <Text style={tabState == "mostsampled" ? {color: '#000000', fontWeight: 'bold', fontSize: 29} : {color: '#BABABA', fontWeight: 'bold', fontSize: 29}}>Most Samples</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
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
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.container}>
          <FlatList data={sniplets}
          renderItem={({item, index}) => {
            return (
          index == 0 ? (<ExploreTabs></ExploreTabs>) : tabState == "onrepeat" ? (<ASniplet currentVisibleIndex={currentVisibleIndex} currentIndex={index} sniplet={item}/>)
          : tabState == "music" ? (null) : null
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
      top: 20,
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

export default ExploreFeed;