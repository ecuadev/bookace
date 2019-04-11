import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './SliderEntry.styles';
import { goToBook } from '../../../config/navigation';

class SliderEntry extends Component {
	getImage() {
		const {
			data: { image },
			parallax,
			parallaxProps
		} = this.props;

		return parallax ? (
			<ParallaxImage
				source={{ uri: image }}
				containerStyle={styles.imageContainer}
				style={styles.image}
				parallaxFactor={0.35}
				showSpinner
				spinnerColor="rgba(0, 0, 0, 0.25)"
				{...parallaxProps}
			/>
		) : (
			<Image source={{ uri: image }} style={styles.image} />
		);
	}

	render() {
		const {
			data: { title, subtitle }
		} = this.props;

		return (
			<TouchableOpacity
				activeOpacity={1}
				style={styles.slideInnerContainer}
				onPress={goToBook}>
				<View style={styles.imageContainer}>
					<Image
						source={{  uri: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg' }}
						style={styles.image}
						resizeMode="cover"
					/>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.title} numberOfLines={2}>{!!title && title.toUpperCase()}</Text>
					<Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

SliderEntry.propTypes = {
	data: PropTypes.object.isRequired,
	parallax: PropTypes.bool,
	parallaxProps: PropTypes.object
};

SliderEntry.defaultProps = {
	parallax: PropTypes.bool,
	parallaxProps: PropTypes.object
};

export default SliderEntry;
