import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class Social extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Social Page</Text>
			</View>
		);
	}
}
