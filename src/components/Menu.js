import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window')

class Menu extends Component{
  render(){
    return(
      <View style={styles.menu}>
        <View style={styles.avatarContaienr }>
           <View style={styles.avatarImage}>
             <Image styles={styles.avatar} source={require('../images/user.png')}/>
             <Text style={styles.text}>Rodolfo Peixoto</Text>
           </View>
           <Icon
             name="exchange"
             color="white"
             size={25}
           />
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.textWithIcon}>
            <View style={styles.withIcon}>
              <Text>
                 <Icon
                   style={styles.iconWithText}
                   name="download"
                   color="white"
                   size={28}
                 />
                 <Text style={styles.text}>
                   Downloads
                 </Text>
              </Text>
            </View>
            <Icon
              style={styles.rightIcon}
              name="angle-right"
              color="white"
              size={25}
            />
          </View>

          <View style={styles.textWithIcon}>
            <View style={styles.withIcon}>
              <Text>
                 <IonIcons
                   style={styles.iconWithText}
                   name="md-checkmark"
                   color="white"
                   size={28}
                 />
                 <Text style={styles.text}>
                   Lista de Filmes
                 </Text>
              </Text>
            </View>
            <Icon
              style={styles.rightIcon}
              name="angle-right"
              color="white"
              size={25}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1
  }
});

export default Menu
