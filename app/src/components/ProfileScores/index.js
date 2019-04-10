import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const ProfileScores = () => (
	<View style={styles.scores}>
		<View style={styles.scoreItem}>
			<Text style={styles.scoreItemTitle}>+20K</Text>
			<Text style={styles.scoreItemValue}>Followers</Text>
		</View>
		<View style={styles.scoreItem}>
			<Text style={styles.scoreItemTitle}>392</Text>
			<Text style={styles.scoreItemValue}>Follow</Text>
		</View>
		<View style={styles.scoreItem}>
			<Text style={styles.scoreItemTitle}>258</Text>
			<Text style={styles.scoreItemValue}>Reviews</Text>
		</View>
	</View>
);

ProfileScores.propTypes = {

};

ProfileScores.defaultProps = {

};

export default ProfileScores;
