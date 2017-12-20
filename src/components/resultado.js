import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class resultado extends Component {
	constructor(props) {
		super(props);

		this.state = { resultado: ''};
	}

	componentWillMount() {
		const flipCoin = Math.floor(Math.random() * 2);
		if (flipCoin) {
			this.setState({ resultado: cara });
		} else {
			this.setState({ resultado: coroa });
		}
	}

	render() {
		return (
			<View style={styles.resultado}>
				<Image source={this.state.resultado} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	resultado: { 
		flex: 1,
		backgroundColor: '#61bd8c',
		alignItems: 'center',
		justifyContent: 'center'
	}
});