import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class sobreJogo extends Component {
	render() {
		return (
			<View style={styles.sobre}>
				<Text>Sobre os jogos</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	sobre: { 
		flex: 1,
		backgroundColor: '#61bd8c'
	}
});