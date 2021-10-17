import * as React from 'react';
import { StyleSheet, 
  Text, 
  ScrollView, 
  View,
  Image,
  TouchableOpacity,
  Dimensions, } from 'react-native';

const width = Dimensions.get("window").width;

const Notification = ({ imageUri, text, buttonText }) => {
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
          width: width * 0.6,
          textAlign: "left",
        }}
      >
        {text}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 4,
          borderColor: "#d3d3d3",
          borderWidth: 1
        }}
      >
        <Text style={{ color: "black" }}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
};

export default function TabFourScreen({ imageUri, text, buttonText }) {

  return (
  
  <View style={styles.container}>
      <ScrollView>
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>This Month</Text>
          </View>
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="He started following you."
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="She started following you."
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="She started following you."
            buttonText="Follow"
          />
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Today</Text>
          </View>
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="He started following you."
            buttonText="Follow"
          />
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Previous</Text>
          </View>
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="She started following you."
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="She started following you."
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="She started following you."
            buttonText="Follow"
          />
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Suggestions</Text>
          </View>
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="She started following you."
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="He started following you."
            buttonText="Follow"
          />
          <Notification
            imageUri="https://picsum.photos/id/237/200/300"
            text="He started following you."
            buttonText="Follow"
          />
      </ScrollView>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'white',
  paddingLeft: 30,
  paddingTop: 48,
},
header: {
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
},
request: {
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  paddingTop: 10,
},
notification: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 10,
},
following: {
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  paddingTop: 10,
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
  alignItems: "center",
  width: "30%",
  paddingVertical: 5,
  borderRadius: 5,
},
categoryLine: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 15,
},
scene: {
  flex: 1,
},
});
