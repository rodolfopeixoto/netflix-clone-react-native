
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './components/Header';
import List from './components/List';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <View style={[{flex: 1}, styles.container]}>
          {/* <Header /> */}
          <Slider />
          <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  }
})

export default App
