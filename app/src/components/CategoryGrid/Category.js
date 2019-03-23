import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Images from '@assets/images';

import styles from './styles';

const Category = ({ label, style }) => (
	<TouchableOpacity onPress={() => {}}>
		<ImageBackground
			source={Images.categoryHorror}
			style={[styles.categoryBackground, style]}
			imageStyle={styles.categoryBackgroundImage}
			blurRadius={8}>
			<Text style={styles.categoryText}>{label}</Text>
		</ImageBackground>
	</TouchableOpacity>
);

Category.propTypes = {
	label: PropTypes.string.isRequired,
	style: PropTypes.object
};

Category.defaultProps = {
	style: null
};

export default Category;
