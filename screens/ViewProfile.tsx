import React from 'react';
import { ScrollView,
    Text,
    View,
    TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import ProfileFeed from '../components/ProfileFeed';

const PostDetail = ({ value, detail }) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#BABABA', fontWeight: 'bold'}}>{value}</Text>
        <Text style={{color: '#BABABA', fontWeight: 'bold'}}> {detail}</Text>
      </View>
    );
  };

const ViewProfile = () => {

  const navigation = useNavigation();

  return (
  <View style={StyleSheet.absoluteFill}>
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color={'#BABABA'} />
      </TouchableOpacity>
    </View>
    <ProfileFeed></ProfileFeed>
  </View>
  );
}
  
  const styles = StyleSheet.create({
    headerContainer: {
      width: '100%',
      backgroundColor: 'white',
      padding: 10,
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

export default ViewProfile;