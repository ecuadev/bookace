import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image } from 'react-native';
import Images from '@assets/images';

import styles from './styles';

const GoogleButton = ({ children, onPress, style }) => (
	<TouchableOpacity onPress={onPress} style={[styles.button, styles.googleButton, style]}>
		<Image source={Images.googleAuthIcon} style={styles.icon} />
		<Text style={styles.googleLabel}>{children}</Text>
	</TouchableOpacity>
);

GoogleButton.propTypes = {
	children: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	style: PropTypes.object
};

GoogleButton.defaultProps = {
	onPress: () => {},
	style: null
};

export default GoogleButton;
