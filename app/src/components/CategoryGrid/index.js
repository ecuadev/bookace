import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Category from './Category';

import styles from './styles';

const CategoryGrid = ({ style }) => (
	<View style={[styles.grid, style]}>
		<Category label="Action" />
		<Category label="Horror" />
		<Category label="Drama" />
		<Category label="Novel" />
		<Category label="Fiction" />
		<Category label="Cooking" />
		<Category label="Kids" />
		<Category label="History" />
		<Category label="Crime" />
		<Category label="Fantasy" />
	</View>
);

CategoryGrid.propTypes = {
	style: PropTypes.object
};

CategoryGrid.defaultProps = {
	style: null
};

export default CategoryGrid;
