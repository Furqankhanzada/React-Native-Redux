import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { getUser } from 'ReactNativeRedux/src/actions/user';
import { getUserPhotos, getPopularPhotos } from 'ReactNativeRedux/src/actions/photo';

import UserInfo from 'ReactNativeRedux/src/components/userInfo/UserInfo'
import PhotoSlider from 'ReactNativeRedux/src/components/photoSlider/PhotoSlider'

class App extends Component {
    componentWillMount(){
        this.props.dispatch(getUser());
        this.props.dispatch(getUserPhotos());
        this.props.dispatch(getPopularPhotos());
    }
    render() {
        console.log('this.props: ', this.props)
        return (
            <View style={AppStyles.container}>
                <UserInfo user={this.props.user} />
                {!this.props.userPhotos.loading ? <PhotoSlider userPhotos={this.props.userPhotos} /> : null}
            </View>
        );
    }
}

const mapStateToProps = state => {
    let { user, userPhotos, popularPhotos } = state;
    return { user, userPhotos, popularPhotos }
};

export default connect(mapStateToProps)(App);


export const AppStyles = StyleSheet.create({
    container:{
        padding: 10,
        marginBottom: 15,
        flex: 1
    }
});