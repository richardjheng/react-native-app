import React, { Component } from 'react';
import { View , StyleSheet , Text } from 'react-native';

export default class Profile extends Component {
    render() {
        return ( 
            <View style = {StyleSheet.mainView}>
                <Text style = { styles.defaultText}>Profile Page</Text>
            </View>
        ) 
    }

}

const styles = StyleSheet.create ({
    mainView:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-evenly'
    },
    defaultText:{
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'navy'
    }
});