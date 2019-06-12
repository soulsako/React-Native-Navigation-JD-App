import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Banner from '../UI/Banner';
import { connect } from 'react-redux';

class MensScreen extends Component {

  static navigationOptions = {
    title: 'MENS'
  }

  state = {
    banner: []
  }

  componentDidMount(){

    
  }

  render() {
    return (
      <View>
        <Banner />
        <Text>This is the mens screen</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    banner: state.brands.mens.banner, 
    data: state.brands.mens.data
  }

}

const mapActionToProps = () => {
  
}

export default connect(mapStateToProps, mapActionToProps)(MensScreen);

