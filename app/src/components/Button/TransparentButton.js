import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image } from 'react-native';
import { BlurView } from 'react-native-blur';
import styles from './styles';

const TransparentButton = ({ children, onPress, style, icon, blurType }) => (
	<TouchableOpacity onPress={onPress} style={[styles.button, styles.transparentButton, style]}>
		<BlurView style={styles.blurView} blurType={blurType} blurAmount={10} />
		{ icon && <Image source={icon} style={styles.icon} /> }
		<Text style={[styles.label]}>{children}</Text>
	</TouchableOpacity>
);

TransparentButton.propTypes = {
	children: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	style: PropTypes.object,
	icon: PropTypes.number,
	blurType: PropTypes.string
};

TransparentButton.defaultProps = {
	onPress: () => {},
	style: null,
	icon: null,
	blurType: 'light'
};

export default TransparentButton;
