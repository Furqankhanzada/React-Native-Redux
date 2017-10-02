import { StyleSheet, Dimensions } from 'react-native';

export const UserInfoStyles = StyleSheet.create({
    container:{
        padding: 10,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    },
    image:{
        width: 80,
        height : 80,
        marginRight: 15,
        borderRadius: 40
    },
    textContainer:{
        width: Dimensions.get('window').width - 115
    },
    name:{
        fontWeight: '600',
        marginBottom: 5
    }
});