import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image } from 'react-native';
import Images from '@assets/images';

import styles from './styles';

const FacebookButton = ({ children, onPress, style }) => (
	<TouchableOpacity onPress={onPress} style={[styles.button, styles.facebookButton, style]}>
		<Image source={Images.facebookAuthIcon} style={styles.icon} />
		<Text style={styles.facebookLabel}>{ children }</Text>
	</TouchableOpacity>
);

FacebookButton.propTypes = {
	children: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	style: PropTypes.object
};

FacebookButton.defaultProps = {
	onPress: () => {},
	style: null
};

export default FacebookButton;
