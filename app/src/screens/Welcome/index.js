import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { goToAuth, goHome } from '../../navigation';

import styles from './styles';

export default class Welcome extends Component {
	componentDidMount() {
		try {
			const user = null;

			if (user) {
				goHome();
			} else {
				goToAuth();
			}
		} catch (err) {
			console.log('error: ', err);
			goToAuth();
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.message}>Loading</Text>
			</View>
		);
	}
}
