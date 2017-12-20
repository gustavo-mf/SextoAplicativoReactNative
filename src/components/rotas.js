import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import SobreJogo from '../components/sobreJogo';
import OutrosJogos from '../components/outrosJogos';
import CenaPrincipal from '../components/cenaPrincipal';
import Resultado from '../components/resultado';

const styles = StyleSheet.create({ 
	titlePrincipal: { alignSelf: 'center' },
	titleStyle: {
		alignSelf: 'center', 
		marginLeft: -56
	}
});

const rotas = () => {
	return (
		<Router scneStyle={{ paddingTop: 50 }}>
			<Scene key='root'>
				<Scene key='principal' component={CenaPrincipal} initial title='Cara ou coroa' titleStyle={styles.titlePrincipal} />
				<Scene key='sobre' component={SobreJogo} title='Sobre Jogo' titleStyle={styles.titleStyle} />
				<Scene key='outros' component={OutrosJogos} title='Outros Jogos' titleStyle={styles.titleStyle} />
				<Scene key='resultado' component={Resultado} title='Resultado' titleStyle={styles.titleStyle} />
			</Scene>
		</Router>
	);
};

export default rotas;