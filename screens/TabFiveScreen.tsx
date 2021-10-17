import React from 'react';
import { StyleSheet,
  Text,
  View, } from 'react-native';
import ProfileFeed from '../components/ProfileFeed';


const PostDetail = ({ value, detail }) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: '#BABABA', fontWeight: 'bold'}}>{value}</Text>
      <Text style={{color: '#BABABA', fontWeight: 'bold'}}> {detail}</Text>
    </View>
  );
};

export default function TabFiveScreen() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.container}>
        <ProfileFeed></ProfileFeed>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
