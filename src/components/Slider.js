import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window')

const Slider = props => (
  <View style={styles.container}>
    <Image style={styles.image} source={props.uri} />
  </View>
)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  image:  {
    flex: 1,
    width

  }
});

export default class extends Component{
  constructor(props){
    super(props);
    this.state = {
      imagesSlider: [
        require('../images/1.jpg'),
        require('../images/2.jpg'),
        require('../images/3.jpg')
      ]
    }
  }
  render(){
    return(
      <View>
        <Swiper
            autoplay
            height={240}
          >
            {
              this.state.imagesSlider.map((item,index)  =>
              <Slider
                uri={item}
                key={index}
              />)
             }
        </Swiper>
      </View>
    )
  }
}
