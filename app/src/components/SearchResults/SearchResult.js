import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

const SearchResult = ({ onBookPress, style }) => (
	<TouchableOpacity onPress={onBookPress} style={[styles.result, style]}>
		<View style={styles.resultImageContainer}>
			<Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg' }} style={styles.resultImage} />
		</View>
		<View style={styles.resultContent}>
			<Text style={styles.resultTitle}>Harry Potter and the Sorcerer's Stone</Text>
			<Text style={styles.resultAuthor}>JK. Rowling</Text>
		</View>
	</TouchableOpacity>
);

SearchResult.propTypes = {
	onBookPress: PropTypes.func,
	style: PropTypes.object
};

SearchResult.defaultProps = {
	onBookPress: () => {},
	style: null
};

export default SearchResult;
