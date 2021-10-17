import React from 'react'
import { View } from 'react-native'
import { Ionicons, Entypo, Feather, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

const NewSnipFooter = () => {

    return (    
        <View style={{width: '100%', paddingLeft: 25, paddingRight: 25,}}>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                <Entypo  name={"controller-play"} size={22} color={'#BABABA'}/>
                <MaterialCommunityIcons  name={"record"} size={25} color={'#BABABA'}/>
                <MaterialIcons  name={"more-horiz"} size={25} color={'#BABABA'}/>
            </View>

            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                <Ionicons  name={"md-text"} size={22} color={'#BABABA'}/>
                <Feather  name={"image"} size={22} color={'#BABABA'}/>
                <MaterialIcons name={"content-copy"} size={22} color={'#BABABA'}/>
            </View>
        </View>
    );
}

export default NewSnipFooter;