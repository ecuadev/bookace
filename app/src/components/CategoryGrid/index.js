import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Category from './Category';

import styles from './styles';

const CategoryGrid = ({ categories, onCategoryPress, style }) => {
	if (!categories.length) {
		return (
			<View style={styles.loading}>
				<ActivityIndicator size="large" color={EStyleSheet.value('$primaryColor')} />
			</View>
		);
	}

	return (
		<View style={[styles.grid, style]}>
			{categories.map(category => (
				<Category key={category._id} label={category.name} onPress={() => onCategoryPress(category)} />
			))}
		</View>
	)
};

CategoryGrid.propTypes = {
	categories: PropTypes.array,
	onCategoryPress: PropTypes.func,
	style: PropTypes.object
};

CategoryGrid.defaultProps = {
	categories: [],
	onCategoryPress: () => {},
	style: null
};

export default CategoryGrid;
