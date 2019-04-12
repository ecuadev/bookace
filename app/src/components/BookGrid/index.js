import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Book from './Book';
import LoadingBook from './LoadingBook';
import styles from './styles';

const BookGrid = ({ books, onBookPress, style }) => (
	<View style={[styles.grid, style]}>
		{ !books.length && (
			<View style={styles.loadingContent}>
				<LoadingBook index={0} />
				<LoadingBook index={1} />
				<LoadingBook index={2} />
				<LoadingBook index={3} />
			</View>
		)}
		{ books.map((book, i) => (
			<Book
				key={i}
				data={book}
				onPress={() => onBookPress(book)}
				style={EStyleSheet.child(styles, 'book', i, books.length)} />
		))}
	</View>
);

BookGrid.propTypes = {
	books: PropTypes.array,
	onBookPress: PropTypes.func,
	style: PropTypes.object
};

BookGrid.defaultProps = {
	books: [],
	onBookPress: () => {},
	style: null
};

export default BookGrid;
