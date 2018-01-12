import React, { Component } from 'react';
import {
  StyleSheet,
  Image,  
  View  
} from 'react-native';

export default class Background extends Component<{}> {

    constructor(props){
        super();
        this.state = {
            resource : require('../Resources/background.jpg')
        }
    }

    render(){

        return (
            <Image 
                source={ this.state.resource }
                resizeMode='cover'
                style={styles.backdrop}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
    backdrop: {
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    
      }
});