import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component<Props> {
	render() {
		return (
			<View style = {style.mainView}>
				<View style = {style.firebrick} />
				<View style = {style.coral} />
				<View style = {style.lightseagreen} />
				<View style = {style.lightslategray} />
				<View style = {style.olive} />
				<View style = {style.thistle} />
			</View>
		);
	}
}

const style = StyleSheet.create({
	mainView: {
	// flex: 1,
	// flexDirection: 'row',
	// flexDirection: 'column',
	// flexDirection: 'row-reverse'
	// flexDirection: 'column-reverse',
	// justifyContent: 'flex-start'
	// justifyContent: 'flex-end'
	// justifyContent: 'center'
	// justifyContent: 'space-between'
	// justifyContent: 'space-around'
	// justifyContent: 'space-evenly',
	// alignItems: 'center'
	// alignItems: 'stretch'
	// flexWrap: 'wrap'
	flexWrap: 'wrap-reverse'
	},
	firebrick: {
		width: 50,
		height: 200,
		backgroundColor: 'firebrick',
	},
	coral: {
		width: 50,
		height: 200,
		backgroundColor: 'coral',

	},
	lightseagreen: {
		width: 50,
		height: 200,
		backgroundColor: 'lightseagreen',
	},
	lightslategray: {
		width: 50,
		height: 200,
		backgroundColor: 'lightslategray',
	},
	olive: {
		width: 50,
		height: 200,
		backgroundColor: 'olive',

	},
	thistle: {
		width: 50,
		height: 200,
		backgroundColor: 'thistle',
	}});