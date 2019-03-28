import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Images from '@assets/images';

import styles from './styles';

const BookHeader = ({ onBack, onMenu }) => (
	<View style={[styles.container, styles.staticContainer]}>
		<TouchableOpacity onPress={onBack} style={styles.headerButtonBack}>
			<Image source={Images.backIcon} style={styles.headerButtonBackIcon} />
		</TouchableOpacity>
		<Text style={styles.bookTitleSmall} numberOfLines={2}>Harry Potter and the Sorcerer's Stone</Text>
		<TouchableOpacity onPress={onMenu} style={styles.headerButtonMenu}>
			<Image source={Images.menuIcon} style={styles.headerButtonMenuIcon} />
		</TouchableOpacity>
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
