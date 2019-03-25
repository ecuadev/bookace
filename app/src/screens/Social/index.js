import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import NoConnection from '../../components/NoConnection';

import styles from './styles';

class Social extends Component {
	render() {
		const { network } = this.props;

		return (
			<View style={styles.container}>
				{ network.connected && <Text style={styles.title}>Social Page</Text> }
				{ network.hasCheckedStatus && !network.connected && (
					<NoConnection />
				)}
			</View>
		);
	}
}

export default connect(
	state => ({
		network: state.network
	})
)(Social);
