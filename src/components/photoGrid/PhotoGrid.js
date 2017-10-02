import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { PhotoGridStyles } from 'ReactNativeRedux/src/components/photoGrid/PhotoGridStyles'

export default  class PhotoGrid extends Component {
    render() {
        //const { profileThumbnail, name, bio } = this.props.user;
        const { popularPhotos } = this.props;

        if(popularPhotos.loading || !popularPhotos.posts )
            return null;

        return(
            <View style={ PhotoGridStyles.container }>
                {popularPhotos.posts.map((post) => {
                    return <View key={post.objectId} style={ PhotoGridStyles.list }>
                        <Image style={ PhotoGridStyles.image } source={{ uri: post.thumbnail }} />
                    </View>
                })}
            </View>
        );
    }
}