import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { getUser } from 'ReactNativeRedux/src/actions/user';
import { getUserPhotos, getPopularPhotos } from 'ReactNativeRedux/src/actions/photo';

class App extends Component {
    componentWillMount(){
        this.props.dispatch(getUser());
        this.props.dispatch(getUserPhotos());
        this.props.dispatch(getPopularPhotos());
    }
    render() {
        console.log('this.props: ', this.props)
        return (
            <View>
                <Text>Testing ...</Text>
                <Text>Testing ...</Text>
                <Text>Testing ...</Text>
                <Text>Testing ...</Text>
                <Text>Testing ...</Text>
                <Text>Testing ...</Text>
                <Text>Testing ...</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    let { user, userPhotos, popularPhotos } = state;
    return { user, userPhotos, popularPhotos }
};

export default connect(mapStateToProps)(App);