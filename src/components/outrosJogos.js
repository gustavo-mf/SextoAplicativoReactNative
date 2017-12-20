import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class outrosJogos extends Component {
	render() {
		return (
			<View style={styles.outros}>
				<Text>Outros jogos</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	outros: { 
		flex: 1,
		backgroundColor: '#61bd8c'
	}
});