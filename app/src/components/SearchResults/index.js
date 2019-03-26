import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text } from 'react-native';

import SearchResult from './SearchResult';

import styles from './styles';

const SearchResults = () => (
	<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
		<Text style={styles.title}>Search Results</Text>
		<SearchResult />
		<SearchResult />
		<SearchResult />
		<SearchResult />
		<SearchResult />
		<SearchResult />
		<SearchResult />
		<SearchResult />
		<SearchResult />
		<SearchResult />
		<SearchResult />
	</ScrollView>
);

SearchResults.propTypes = {

};

SearchResults.defaultProps = {

};

export default SearchResults;
