import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'

import configureStore from 'ReactNativeRedux/src/store/configureStore'
import App from 'ReactNativeRedux/src/components/App'

export default class ReactNativeRedux extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);
