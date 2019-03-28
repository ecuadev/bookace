import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Book from './Book';
import styles from './styles';

const BookGrid = ({ style }) => (
	<View style={[styles.grid, style]}>
		<Book style={EStyleSheet.child(styles, 'book', 0, 10)} />
		<Book style={EStyleSheet.child(styles, 'book', 1, 10)} />
		<Book style={EStyleSheet.child(styles, 'book', 2, 10)} />
		<Book style={EStyleSheet.child(styles, 'book', 3, 10)} />
		<Book style={EStyleSheet.child(styles, 'book', 4, 10)} />
		<Book style={EStyleSheet.child(styles, 'book', 5, 10)} />
		<Book style={EStyleSheet.child(styles, 'book', 6, 10)} />
		<Book style={EStyleSheet.child(styles, 'book', 7, 10)} />
		<Book style={EStyleSheet.child(styles, 'book', 8, 10)} />
		<Book style={EStyleSheet.child(styles, 'book', 9, 10)} />
	</View>
);

BookGrid.propTypes = {
	style: PropTypes.object
};

BookGrid.defaultProps = {
	style: null
};

export default BookGrid;
