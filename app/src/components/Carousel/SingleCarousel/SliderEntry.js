import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { goToBook } from '../../../config/navigation';

class SliderEntry extends Component {
	render() {
		const { data } = this.props;

		return (
			<TouchableOpacity activeOpacity={1} style={styles.slideInnerContainer} onPress={goToBook}>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg' }}
						style={styles.image}
						resizeMode="cover"
					/>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.bookTitle} numberOfLines={2}>{data.title}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

SliderEntry.propTypes = {
	data: PropTypes.object.isRequired
};

SliderEntry.defaultProps = {

};

export default SliderEntry;
