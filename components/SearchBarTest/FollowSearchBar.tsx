import React, {useState} from 'react';
import { TextInput, View, TouchableOpacity, Text} from 'react-native';

export type props = {

}

const FollowSearchBar = () => {

  const [value, onChangeText] = useState("");

  return (
    <View style={{width: '100%', height: '100%', paddingHorizontal: 10}}>
      <TextInput
        style={{
          height: 30,
          backgroundColor: "#EEEDEC",
          borderRadius: 5,
          width: '100%',
          paddingHorizontal: 10,
        }}
        placeholder="Search"
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

export default FollowSearchBar;