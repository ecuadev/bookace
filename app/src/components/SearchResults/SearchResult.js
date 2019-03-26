import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const SearchResult = ({ style }) => (
	<View style={[styles.result, style]}>
		<View style={styles.resultImageContainer}>
			<Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg' }} style={styles.resultImage} />
		</View>
		<View style={styles.resultContent}>
			<Text style={styles.resultTitle}>Harry Potter and the Sorcerer's Stone</Text>
			<Text style={styles.resultAuthor}>JK. Rowling</Text>
		</View>
	</View>
);

SearchResult.propTypes = {
	style: PropTypes.object
};

SearchResult.defaultProps = {
	style: null
};

export default SearchResult;
