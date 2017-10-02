import { StyleSheet, Dimensions } from 'react-native';

export const PhotoSliderStyles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').width
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sliderImage:{
        height : Dimensions.get('window').width - 30,
        width: Dimensions.get('window').width - 30,
        marginBottom: 50
    },
    dot:{
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 10,
        height: 10,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot:{
        backgroundColor: '#909090',
        width: 10,
        height: 10,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    paginationStyle:{
        bottom: 10
    }
});