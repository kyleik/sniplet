import * as React from 'react';
import { StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import ExploreFeed from '../components/ExploreFeed';

export default function TabTwoScreen() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.container}>
        <ExploreFeed></ExploreFeed>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    top: 48,
    paddingLeft: 30,
    justifyContent: 'center',
  },
  childContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    backgroundColor: "cyan",
    width: "100%"
  },
});
