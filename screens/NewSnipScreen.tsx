import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import NewSnipFooter from '../components/NewSnipFooter';
import Record from '../components/Record';

export default function NewSnipScreen() {

  const [imageUrl, setImageUrl] = useState();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={30} color={'#BABABA'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newSnipContainer}>
        <View style={styles.inputsContainer}>
          <Record></Record>
        </View>
      </View>
      <View style={{borderWidth: 0.5, borderColor: '#D3D3D3', width: '100%'}}></View>
      <NewSnipFooter></NewSnipFooter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
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
  newSnipContainer: {
    flexDirection: 'row',
    padding: 15,
    height: 470,
  },
  inputsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  pickImage: {
    fontSize: 18,
    color: Colors.light.tint,
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
  }
});