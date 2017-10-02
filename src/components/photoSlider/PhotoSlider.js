import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { PhotoSliderStyles } from 'ReactNativeRedux/src/components/photoSlider/PhotoSliderStyles'
import Swiper from 'react-native-swiper'

export default  class PhotoSlider extends Component {
    render() {
        const { userPhotos } = this.props;

        if(userPhotos.loading || !userPhotos.posts )
            return null;

        return(
            <Swiper style={ PhotoSliderStyles.container } dot={<View style={ PhotoSliderStyles.dot } />}
                    activeDot={<View style={ PhotoSliderStyles.activeDot } />} paginationStyle={ PhotoSliderStyles.paginationStyle }>
                {userPhotos.posts.map((post) => {
                    return <View key={post.objectId} style={ PhotoSliderStyles.slide }>
                        <Image style={ PhotoSliderStyles.sliderImage } source={{ uri: post.thumbnail}} />
                    </View>
                })}
            </Swiper>
        );
    }
}