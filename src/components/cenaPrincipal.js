import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobre = require('../imgs/sobre_jogo.png');
const btnOutros = require('../imgs/outros_jogos.png');

export default class cenaPrincipal extends Component {
	render() {
		return (
			<View style={styles.cenaPrincipal}>
				<View style={styles.apresentacao}>
					<Image source={logo} />
					<TouchableHighlight onPress={ () => { Actions.resultado(); } }>
						<Image source={btnJogar} />
					</TouchableHighlight>
				</View>
				<View style={styles.botoes}>
					<TouchableHighlight onPress={ () => { Actions.sobre(); } }>
						<Image source={btnSobre} />
					</TouchableHighlight>
					<TouchableHighlight onPress={ () => { Actions.outros(); } }>
						<Image source={btnOutros} />
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	cenaPrincipal: {
		flex: 1,
		backgroundColor: '#61bd8c'
	},
	apresentacao: {
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		flex: 10
	},
	botoes: {
		flex: 1,
		paddingHorizontal: 5,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});