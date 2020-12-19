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
	flexDirection: 'column'
	// flexDirection: 'row-reverse'
	// flexDirection: 'column-reverse',
	//justifyContent: 'flex-start'
	//justifyContent: 'flex-end'
	//justifyContent: 'center'
	//justifyContent: 'space-between'
	//justifyContent: 'space-around'
	//justifyContent: 'space-evenly'
	},
	firebrick: {
		width: 50,
		height: 400,
		backgroundColor: 'firebrick',
		//flexGrow: 0.5
		flexShrink: 0.5
	},
	coral: {
		width: 50,
		height: 400,
		backgroundColor: 'coral',
		//flexGrow: 0.3
		flexShrink: 0.3
	},
	lightseagreen: {
		width: 50,
		height: 400,
		backgroundColor: 'lightseagreen',
		//flexGrow: 0.2
		flexShrink: 0.2
	}
});