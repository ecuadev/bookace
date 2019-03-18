import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class Camera extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Camera Page</Text>
			</View>
		);
	}
}
