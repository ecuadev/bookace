import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class Profile extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Profile Page</Text>
			</View>
		);
	}
}
