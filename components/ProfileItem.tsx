import React, {useState} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export type ProfileItemProps = {
  tab: any;
}

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
        <View style={styles.container}>
          <View style={{ flexDirection: "row", width: "100%", paddingTop: 68 }}>
            <Image
              style={{ height: 100, width: 100, borderRadius: 4, borderWidth: 1, borderColor: '#d3d3d3' }}
              source={{ uri: 'data:image/jpeg;base64,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' }}
              resizeMode="cover"/>
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
            <TouchableOpacity onPress={() => navigation.navigate('FollowersFollowing')}>
             <PostDetail value={16833} detail="Followers" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FollowersFollowing', {screen: 'following'})}>
             <PostDetail value={2040} detail="Following" />
            </TouchableOpacity>
          </View>
      </View>
    )
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

export default ProfileItem;