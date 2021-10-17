import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

import Feed from '../components/Feed'

export default function TabOneScreen() {

  return (

    <View style={StyleSheet.absoluteFill}>
        <View style={styles.container}>
            <Feed/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingTop: 20,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '80%',
  },
});
