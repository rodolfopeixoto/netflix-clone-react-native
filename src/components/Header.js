import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => (

     <View style={styles.container}>
       <TouchableWithoutFeedback onPress={() => props.toggle()}>
          <Icon
            name='bars'
            color="white"
            size={25}
          />
       </TouchableWithoutFeedback>
       <Image style={styles.logo} source={require('../images/logo.png')} />
       <Icon
         name="search"
         color="white"
         size={25}
       />
     </View>

)


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 15
  },
  logo: {
    width: 120,
    height: 40
  }
})


export default Header
