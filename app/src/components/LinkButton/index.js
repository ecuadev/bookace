import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image } from 'react-native';
import flattenStyle from 'flattenStyle';
import styles from './styles';

const LinkButton = ({ children, onPress, containerStyle, style, rightIcon }) => (
	<TouchableOpacity onPress={onPress} style={[styles.wrapper, containerStyle]}>
		<Text style={[styles.label, style]}>{ children }</Text>
		{ !!rightIcon && <Image source={rightIcon} style={[styles.rightIcon, { tintColor: flattenStyle(style).color || styles._label.color }]} /> }
	</TouchableOpacity>
);

LinkButton.propTypes = {
	children: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	containerStyle: PropTypes.object,
	style: PropTypes.object,
	rightIcon: PropTypes.number
};

LinkButton.defaultProps = {
	onPress: () => {},
	containerStyle: null,
	style: null,
	rightIcon: null
};

export default LinkButton;
