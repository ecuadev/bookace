import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Category from './Category';

import styles from './styles';

const CategoryGrid = ({ onCategoryPress, style }) => (
	<View style={[styles.grid, style]}>
		<Category label="Action" onPress={() => onCategoryPress('Action')} />
		<Category label="Horror" onPress={() => onCategoryPress('Horror')} />
		<Category label="Drama" onPress={() => onCategoryPress('Drama')} />
		<Category label="Novel" onPress={() => onCategoryPress('Novel')} />
		<Category label="Fiction" onPress={() => onCategoryPress('Fiction')} />
		<Category label="Cooking" onPress={() => onCategoryPress('Cooking')} />
		<Category label="Kids" onPress={() => onCategoryPress('Kids')} />
		<Category label="History" onPress={() => onCategoryPress('History')} />
		<Category label="Crime" onPress={() => onCategoryPress('Crime')} />
		<Category label="Fantasy" onPress={() => onCategoryPress('Fantasy')} />
	</View>
);

CategoryGrid.propTypes = {
	onCategoryPress: PropTypes.func,
	style: PropTypes.object
};

CategoryGrid.defaultProps = {
	onCategoryPress: () => {},
	style: null
};

export default CategoryGrid;
