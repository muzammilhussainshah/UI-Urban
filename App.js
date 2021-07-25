
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import Routes from "./src/routes"
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#000" }}>
           <Routes/>
            </View>
    );
  }
}



