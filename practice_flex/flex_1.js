import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component<Props> {
	render() {
		return (
			<View style = {style.mainView}>
				<View style = {style.firebrick} />
				<View style = {style.coral} />
				<View style = {style.lightseagreen} />
			</View>
		);
	}
}

const style = StyleSheet.create({
	mainView: {

	},
	firebrick: {
		width: 50,
		height: 50,
		backgroundColor: 'firebrick',
	},
	coral: {
		width: 100,
		height: 100,
		backgroundColor: 'coral',

	},
	lightseagreen: {
		width: 150,
		height: 150,
		backgroundColor: 'lightseagreen',
	}
});