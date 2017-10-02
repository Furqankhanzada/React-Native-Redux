import { StyleSheet, Dimensions } from 'react-native';

export const PhotoGridStyles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    list:{
        height : (Dimensions.get('window').width/3) - 12,
        width: (Dimensions.get('window').width/3) - 5.5,
        padding: 2,
        margin: 2,
        overflow: 'hidden'
    },
    image:{
        height : Dimensions.get('window').width/3,
        width: Dimensions.get('window').width/3,
    }
});