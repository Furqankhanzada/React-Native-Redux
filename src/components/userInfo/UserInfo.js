import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { UserInfoStyles } from 'ReactNativeRedux/src/components/userInfo/UserInfoStyles'

export default  class UserInfo extends Component {
    render() {
        const { profileThumbnail, name, bio } = this.props.user;
        return(
            <View style={ UserInfoStyles.container }>
                <View>
                    <Image style={ UserInfoStyles.image } source={{ uri: profileThumbnail }} />
                </View>
                <View style={ UserInfoStyles.textContainer }>
                    <Text style={ UserInfoStyles.name }>{ name }</Text>
                    <Text>{ bio }</Text>
                </View>
            </View>
        );
    }
}