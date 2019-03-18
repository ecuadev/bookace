import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

const Button = ({ children, onPress, style, icon }) => (
	<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
		{ icon && <Image source={icon} style={styles.icon} /> }
		<Text style={[styles.label]}>{children}</Text>
	</TouchableOpacity>
);

Button.propTypes = {
	children: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	style: PropTypes.object,
	icon: PropTypes.number
};

Button.defaultProps = {
	onPress: () => {},
	style: null,
	icon: null
};

export default Button;
