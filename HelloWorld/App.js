import React, { Component } from 'react';
import{ View, Text, StyleSheet, StatusBar, Image} from 'react-native';

export default class HelloWorld extends Component {

  render() {
    return(

        <View>
        	<StatusBar hidden = {true} />

        	<Text style = { styles.title }> Hello World! </Text>

        	<Text style = { styles.name }> This is my first react-native App </Text>

    		<Image style = { styles.image } source = { require('./images/1.jpg')} />

        </View>

      );
  }
}

const styles = StyleSheet.create ({
	title: {
		marginTop: 50,
		textAlign: 'center',
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30
	},

	name: {
		marginTop: 10,
		textAlign: 'center',
		color: 'red',
		fontWeight: 'bold',
		fontSize: 30	
	},

	image: {
		marginTop: 20,
		width: 300, 
		height: 300,
		alignSelf: 'center'
	}
})