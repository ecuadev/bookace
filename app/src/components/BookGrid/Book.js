import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';

import styles from './styles';

const Book = ({ data, onPress, style }) => (
	<TouchableOpacity onPress={onPress} style={style}>
		<View>
			<View style={styles.bookImageContainer}>
				<Image source={{ uri: data.imageLinks.thumbnail }} style={styles.bookImage} />
			</View>
			<Rating
				readonly
				startingValue={data.averageRating * 5}
				imageSize={15}
				style={styles.bookRating}
			/>
			<Text style={styles.bookTitle} numberOfLines={2}>{data.title}</Text>
			<Text style={styles.bookAuthors} numberOfLines={2}>{data.authors && data.authors.join(', ')}</Text>
		</View>
	</TouchableOpacity>
);

Book.propTypes = {
	data: PropTypes.object.isRequired,
	onPress: PropTypes.func,
	style: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.object),
		PropTypes.object
	])
};

Book.defaultProps = {
	onPress: () => {},
	style: null
};

export default Book;
