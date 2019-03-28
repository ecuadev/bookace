import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text } from 'react-native';

import SearchResult from './SearchResult';

import styles from './styles';

const SearchResults = ({ onBookPress }) => (
	<ScrollView style={styles.container} showsVerticalScrollIndicator={false} keyboardDismissMode="on-drag">
		<Text style={styles.title}>Search Results</Text>
		<SearchResult onBookPress={book => onBookPress(book)} />
		<SearchResult onBookPress={book => onBookPress(book)} />
		<SearchResult onBookPress={book => onBookPress(book)} />
		<SearchResult onBookPress={book => onBookPress(book)} />
		<SearchResult onBookPress={book => onBookPress(book)} />
		<SearchResult onBookPress={book => onBookPress(book)} />
		<SearchResult onBookPress={book => onBookPress(book)} />
		<SearchResult onBookPress={book => onBookPress(book)} />
		<SearchResult onBookPress={book => onBookPress(book)} />
		<SearchResult onBookPress={book => onBookPress(book)} />
		<SearchResult onBookPress={book => onBookPress(book)} />
	</ScrollView>
);

SearchResults.propTypes = {

};

SearchResults.defaultProps = {

};

export default SearchResults;
