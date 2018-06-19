/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Button from './Button';
import ModeSwitch from './ModeSwitch';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    count: 0,
    nightMode: false
  };

  count = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onSwitchChange = val => {
    this.setState({ nightMode: val });
  };

  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.state.nightMode ? 'black' : '#F5FCFF' }]}
      >
        <StatusBar
          backgroundColor={this.state.nightMode ? 'black' : 'white'}
          barStyle={this.state.nightMode ? 'light-content' : 'dark-content'}
        />
        <Text style={[styles.welcome, { color: this.state.nightMode ? 'yellow' : 'blue' }]}>
          Welcome to Economist presentation!
        </Text>
        <Text style={[styles.instructions, { color: this.state.nightMode ? 'white' : 'black' }]}>
          To get started, edit App.js
        </Text>
        <Text style={[styles.instructions, { color: this.state.nightMode ? 'white' : 'black' }]}>
          {this.state.count}
        </Text>
        <Button label="Counter" backgroundColor="yellow" onPress={this.count} />
        <ModeSwitch onValueChange={this.onSwitchChange} value={this.state.nightMode} />
        <View style={styles.authorContainer}>
          <Text style={[styles.instructions, styles.author]}>My name is Tomas Paronai</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginTop: 15,
    marginBottom: 5
  },
  authorContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: 'red'
  },
  author: {
    fontSize: 16
  }
});
