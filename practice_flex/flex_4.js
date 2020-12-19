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
	flex: 1,
	flexDirection: 'row',
	// flexDirection: 'column'
	// flexDirection: 'row-reverse'
	// flexDirection: 'column-reverse',
	// justifyContent: 'flex-start'
	// justifyContent: 'flex-end'
	// justifyContent: 'center'
	// justifyContent: 'space-between'
	// justifyContent: 'space-around'
	justifyContent: 'space-evenly',
	//alignItems: 'center'
	alignItems: 'stretch'
	},
	firebrick: {
		width: 50,
		//height: 50,
		backgroundColor: 'firebrick',
	},
	coral: {
		width: 50,
		//height: 50,
		backgroundColor: 'coral',

	},
	lightseagreen: {
		width: 50,
		//height: 50,
		backgroundColor: 'lightseagreen',
	}
});