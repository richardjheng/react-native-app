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
	// flexDirection: 'row'
	// flexDirection: 'column'
	// flexDirection: 'row-reverse'
	//flexDirection: 'column-reverse',
	//justifyContent: 'flex-start'
	//justifyContent: 'flex-end'
	//justifyContent: 'center'
	//justifyContent: 'space-between'
	//justifyContent: 'space-around'
	//justifyContent: 'space-evenly'
	},
	firebrick: {
		flex:1,
		backgroundColor: 'firebrick',
	},
	coral: {
		flex:2,
		backgroundColor: 'coral',

	},
	lightseagreen: {
		flex:3,
		backgroundColor: 'lightseagreen',
	}
});