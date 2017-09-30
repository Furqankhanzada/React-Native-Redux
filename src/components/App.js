import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { getUser } from 'ReactNativeRedux/src/actions/user';

class App extends Component {
    componentWillMount(){
        this.props.dispatch(getUser());
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
    let { user } = state;
    return { user }
};

export default connect(mapStateToProps)(App);