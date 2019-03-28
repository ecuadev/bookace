import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Images from '@assets/images';

import styles from './styles';

const BookHeader = ({ onBack, onMenu }) => (
	<View style={styles.container}>
		<View style={styles.headerButtons}>
			<TouchableOpacity onPress={onBack} style={styles.headerButtonBack}>
				<Image source={Images.backIcon} style={styles.headerButtonBackIcon} />
			</TouchableOpacity>
			<TouchableOpacity onPress={onMenu} style={styles.headerButtonMenu}>
				<Image source={Images.menuIcon} style={styles.headerButtonMenuIcon} />
			</TouchableOpacity>
		</View>
		<View style={styles.bookMain}>
			<View style={styles.bookImageShadow}>
				<View style={styles.bookImageContainer}>
					<Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg' }} style={styles.bookImage} />
				</View>
			</View>
			<View style={styles.bookInfo}>
				<Text style={styles.bookTitle} numberOfLines={4}>Harry Potter and the Sorcerer's Stone</Text>
				<Text style={styles.bookAuthors} numberOfLines={3}>JK. Rowling</Text>
			</View>
		</View>
	</View>
);

BookHeader.propTypes = {
	onBack: PropTypes.func,
	onMenu: PropTypes.func
};

BookHeader.defaultProps = {
	onBack: () => {},
	onMenu: () => {}
};

export default BookHeader;
