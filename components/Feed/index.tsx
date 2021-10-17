import React, {useState, useEffect, useRef, useContext, useCallback} from 'react';
import { FlatList, View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import sniplets from '../../data/sniplets';
import ASniplet from '../ASniplet';

const Feed = () => {

    const [viewedItems, setViewedItems] = useState([]);
    const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);

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

     const renderItem = ({item, index}) => { 
       return (
     <ASniplet currentVisibleIndex={currentVisibleIndex} currentIndex={index} sniplet={item}/>
     )
       }

   return (

    <View style={{width: '100%', height: '100%', flex: 1}}>
      <FlatList data={sniplets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      />    
    </View>
   );
}

export default Feed;