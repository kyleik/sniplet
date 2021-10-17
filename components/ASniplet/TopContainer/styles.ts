import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

    mediaContainer: {
        flexDirection: 'column',
        opacity: 0.99,
    },

    audioContainer: {
        height: 50,
        flexDirection: 'row',
    },

    image: {
        marginVertical: 10,
        width: "100%",
        height: 140,
        resizeMode: 'cover',
        borderRadius: 4,
        overflow: 'hidden',
    },

    container: {
        flexDirection: 'row',
        top: 5,
        marginVertical: 2,
    },

    name: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    createdAt: {
        marginHorizontal: 5,
        color: '#BABABA'
    },

    loops: {
        color: '#BABABA',
        fontWeight: 'bold'
    },

    replies: {
        marginHorizontal: 8,
        color: '#BABABA',
        fontWeight: 'bold'
    }

})

export default style;