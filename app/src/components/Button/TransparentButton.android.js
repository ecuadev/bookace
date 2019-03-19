import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

const TransparentButton = ({ children, onPress, style, icon }) => (
	<TouchableOpacity onPress={onPress} style={[styles.button, styles.transparentButtonAndroid, style]}>
		{ icon && <Image source={icon} style={styles.icon} /> }
		<Text style={[styles.label]}>{children}</Text>
	</TouchableOpacity>
);

TransparentButton.propTypes = {
	children: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	style: PropTypes.object,
	icon: PropTypes.number
};

TransparentButton.defaultProps = {
	onPress: () => {},
	style: null,
	icon: null
};

export default TransparentButton;
