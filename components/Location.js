import React, { Component } from 'react';
import {
  StyleSheet,
  Image,  
  View,  
  Text
} from 'react-native';

import moment from 'moment';

export default class Location extends Component<{}> {

    constructor(props){
        super();
        this.state = {
            city: props.city,
            date: moment().format("MMM Do YY")
        }
    }

    render(){

        return (
            <View style={ styles.container }>
                <View style={ styles.row }>
                    <Text style={ styles.cityText }>
                        { this.props.city }
                        <Text style={ styles.dateText }>
                            { '\n' + this.state.date }
                        </Text>
                    </Text>                                      
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',        
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',        
        paddingTop: 40        
    },
    cityText: {
        color: '#FFF',
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        padding: 0,
        paddingLeft: 20
    },
    dateText: {
        color: '#FFF',        
        fontSize: 12,
        fontWeight: 'normal'
    }
});