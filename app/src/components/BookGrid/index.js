import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Book from './Book';
import styles from './styles';

const BookGrid = ({ onBookPress, style }) => (
	<View style={[styles.grid, style]}>
		<Book onPress={() => onBookPress(null)} style={EStyleSheet.child(styles, 'book', 0, 10)} />
		<Book onPress={() => onBookPress(null)} style={EStyleSheet.child(styles, 'book', 1, 10)} />
		<Book onPress={() => onBookPress(null)} style={EStyleSheet.child(styles, 'book', 2, 10)} />
		<Book onPress={() => onBookPress(null)} style={EStyleSheet.child(styles, 'book', 3, 10)} />
		<Book onPress={() => onBookPress(null)} style={EStyleSheet.child(styles, 'book', 4, 10)} />
		<Book onPress={() => onBookPress(null)} style={EStyleSheet.child(styles, 'book', 5, 10)} />
		<Book onPress={() => onBookPress(null)} style={EStyleSheet.child(styles, 'book', 6, 10)} />
		<Book onPress={() => onBookPress(null)} style={EStyleSheet.child(styles, 'book', 7, 10)} />
		<Book onPress={() => onBookPress(null)} style={EStyleSheet.child(styles, 'book', 8, 10)} />
		<Book onPress={() => onBookPress(null)} style={EStyleSheet.child(styles, 'book', 9, 10)} />
	</View>
);

BookGrid.propTypes = {
	onBookPress: PropTypes.func,
	style: PropTypes.object
};

BookGrid.defaultProps = {
	onBookPress: () => {},
	style: null
};

export default BookGrid;
