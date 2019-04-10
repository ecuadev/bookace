import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './StackSlider.styles';
import { goToBook } from '../../../config/navigation';

export default class StackSlider extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
		even: PropTypes.bool,
		parallax: PropTypes.bool,
		parallaxProps: PropTypes.object
	};

	render() {
		const {
			data: { title, subtitle },
			parallaxProps,
			componentId
		} = this.props;
		const uppercaseTitle = title ? (
			// <Text style={[styles.title, even ? styles.titleEven : {}]} numberOfLines={2}>
			<Text style={styles.title} numberOfLines={2}>
				{title.toUpperCase()}
			</Text>
		) : (
			false
		);

		return (
			<TouchableOpacity
				activeOpacity={1}
				style={styles.slideInnerContainer}
				onPress={book => goToBook(book, componentId)}
			>
				<View style={styles.imageContainer}>
					<Image
						source={{
							uri:
								'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg'
						}}
						style={styles.image}
					/>
				</View>
			</TouchableOpacity>
		);
	}
}
