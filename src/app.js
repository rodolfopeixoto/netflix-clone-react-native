
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from './components/Header';
import List from './components/List';
import Slider from './components/Slider';
import Menu from './components/Menu';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

 updateMenu(isOpen){
   this.setState({isOpen})
 }

  render() {
    return (
      <View style={[{flex: 1}, styles.container]}>
          <SideMenu
            menu={<Menu />}
            isOpen={this.state.isOpen}
            openChange={(isOpen) => this.updateMenu(isOpen)}
            >
            <Header toggle={this.toggle.bind(this)}/>
            <Slider />
            <List />
          </SideMenu>
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
