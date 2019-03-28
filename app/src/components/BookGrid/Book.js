import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';

import styles from './styles';

const Book = ({ onPress, style }) => (
	<TouchableOpacity onPress={onPress} style={style}>
		<View>
			<View style={styles.bookImageContainer}>
				<Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg' }} style={styles.bookImage} />
			</View>
			<Rating
				readonly
				startingValue={Math.random() * 5}
				imageSize={15}
				style={styles.bookRating}
			/>
			<Text style={styles.bookTitle}>Harry Potter and the Sorcerer's Stone</Text>
			<Text style={styles.bookAuthors}>JK. Rowling</Text>
		</View>
	</TouchableOpacity>
);

Book.propTypes = {
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
