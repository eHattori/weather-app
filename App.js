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
  View,
  Image,
  TextInput
} from 'react-native';

import Forecast from './components/Forecast';
import Background from './components/Background';
import Location from './components/Location';

import GeoLocationService from './services/GeoLocation';
import OpenWeatherService from './services/OpenWeather';

export default class App extends Component<{}> {

  constructor(props){
    super();

    this.state = {
      zip : '',
      weather: 'SUNNY',
      forecast: {
        main: '--',
        description: '--',
        temp:'--',
        min:'--',
        max:'--',
        city: '--',
        icon: ''
      },
      coordenates : null,
    }

    this.geoLocationService = new GeoLocationService();
    this.openWeather = new OpenWeatherService();
  }

  componentDidMount(){
    this.geoLocationService.getCurrentLocation(navigator,(coords) => {
      this.setState({coordenates : coords});
      this.openWeather.getCurrentWeather(coords.longitude, coords.latitude, (weather) =>{        
        if(!weather.error) {          
          this.setState({ forecast : weather});
        }
      });
    });
  }  

  render() {    
    return (
      <View style={styles.container}>
        <Background Weather={ this.state.weather} />
        <Location 
          city={ this.state.forecast.city }           
          />
        <Forecast 
          main={ this.state.forecast.main}
          description={ this.state.forecast.description}
          temp={ this.state.forecast.temp}
          min={ this.state.forecast.min}
          max={ this.state.forecast.max}
          icon={ this.state.forecast.icon}
        />         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 0,
     flex: 1
  } 
});