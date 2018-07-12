/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { AppNavigator } from './src/StackNavigator';
import { store } from './src/store/userStore';
import { Provider } from 'react-redux';

export default class App extends Component {

  componentDidMount() {

    setTimeout(() =>{
        SplashScreen.hide();
    }, 2000);

  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

