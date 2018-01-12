import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  Image, 
  View  
} from 'react-native';

export default class Forecast extends Component<{}> {

    constructor(props){
        super();

        this.state = {
            imgWeather: null
        }
    }

    getImgWeather(icon){

        var img = null;

        switch (icon) {
            case '01d':
                img = require('../Resources/weathers/021-sun.png');                
                break;
            case '01n':                
                img = require('../Resources/weathers/021-night.png');                
                break;
            case '02d':                
                img = require('../Resources/weathers/021-sun.png');                
                break;
            case '02n':                
                img = require('../Resources/weathers/021-cloudy-1.png');                
                break;
            case '03d':                
                img = require('../Resources/weathers/021-cloud.png');                
                break;
            case '03n':                
                img = require('../Resources/weathers/021-cloud.png');                
                break;
            case '04d':                
                img = require('../Resources/weathers/021-cloud.png');                
                break;
            case '04n':                
                img = require('../Resources/weathers/021-cloud.png');                
                break;
            case '09d':                
                img = require('../Resources/weathers/021-rain-2.png');                
                break;
            case '09n':                
                img = require('../Resources/weathers/021-rain-2.png');                
                break;
            case '10d':                
                img = require('../Resources/weathers/021-rain-1.png');                
                break;
            case '10n':                
                img = require('../Resources/weathers/021-rain-2.png');                
                break;
            case '11d':                
                img = require('../Resources/weathers/021-storm.png');                
                break;
            case '11n':                
                img = require('../Resources/weathers/021-storm.png');                
                break;
            case '13d':                
                img = require('../Resources/weathers/021-snowing-3.png');                
                break;
            case '13n':                
                img = require('../Resources/weathers/021-snowing-3.png');                
                break;
            case '50d':                
                img = require('../Resources/weathers/021-cloud.png');                
                break;
            case '50n':                
                img = require('../Resources/weathers/021-cloud.png');                
                break;              
        }
        
        return img;
    }

    convertToCelsius(temp){        
        return isNaN(temp)? '--' : Math.round((5/9*(temp - 32))*100)/100;
    }

    render(){
        return (
            <View style={ styles.row } >
                <View  >
                    <Image 
                        source={ this.getImgWeather(this.props.icon) }                                                
                        style={ styles.imgWeather }
                        resizeMode='stretch'
                    />
                    <Text style={ styles.tempText } >{ this.convertToCelsius(this.props.temp) }º</Text>                
                    <Text style={ styles.mainText } >{ this.props.main.toUpperCase() }</Text>                
                    <Text style={ styles.variableText } > min: { this.convertToCelsius(this.props.min) }º / max: { this.convertToCelsius(this.props.max)}º</Text>
                </View>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {        
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 50,
        maxHeight: 350,
        maxWidth: 210,
        padding: 72,
        backgroundColor: 'transparent'
    },
    imgWeather: {                
        alignSelf: 'center',
        height: 200,
        width: 200
    },
    tempText: {
        color: '#FFF',        
        fontSize: 40,        
        paddingTop: 10,        
        textAlign: 'center',
        width: 210        
    },
    mainText: {
        color: '#FFF',        
        fontSize: 18,                        
        textAlign: 'center',
        paddingTop: 5,        
        width: 200
    },
    variableText: {
        color: '#FFF',        
        fontSize: 14,
        paddingTop: 5,                          
        textAlign: 'center'        
    }
});

/* <Text style={styles.bigtext }>
                    { this.props.main }
                </Text>
                <Text  style={styles.mainText}>
                    { this.props.description }
                </Text>
                <Text style={styles.bigtext }>
                    { this.props.temp } ºF
                </Text> */