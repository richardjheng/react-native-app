import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component<Props> {
	render() {
		return (
			<View style = {style.mainView1}>
				<View style = {style.white1} />
				<View style = {style.white2} />
				<View style = {style.white3} />
				<View style = {style.black1} />
				<View style = {style.black2} />
			</View>
		);
	}
}

const style = StyleSheet.create({
	mainView1: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: 'darkred',
		justifyContent: 'space-between'

	},
	white1:{
		width: 50,
		height: 450,
		backgroundColor: 'white',


	},
	white2:{
		width: 200,
		height: 450,
		backgroundColor: 'white',
		

	},
	white3:{
		width: 50,
		height: 450,
		backgroundColor: 'white',

	},
	black1:{
		width: 100,
		height: 100,
		backgroundColor: 'black',
		position: 'absolute',
		bottom: 100,
		left: 0
	},
	black2:{
		width: 100,
		height: 100,
		backgroundColor: 'black',
		position: 'absolute',
		bottom: 100,
		right: 0
	},
});