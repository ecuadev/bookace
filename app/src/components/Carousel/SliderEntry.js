import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './SliderEntry.styles';
import { goToBook } from '../../config/navigation';

export default class SliderEntry extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
		even: PropTypes.bool,
		parallax: PropTypes.bool,
		parallaxProps: PropTypes.object,
	};

	get image() {
		const {
			data: { image },
			parallax,
			parallaxProps,
			even,
		} = this.props;

		return parallax ? (
			<ParallaxImage
				source={{ uri: image }}
				containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
				style={styles.image}
				parallaxFactor={0.35}
				showSpinner={true}
				spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
				{...parallaxProps}
			/>
		) : (
			<Image source={{ uri: image }} style={styles.image} />
		);
	}

	render() {
		const {
			data: { title, subtitle },
			parallaxProps,
			componentId,
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
				<View style={styles.imageContainer}>{this.image}</View>
				{parallaxProps && (
					<View style={styles.textContainer}>
						{uppercaseTitle}
						<Text style={styles.subtitle} numberOfLines={2}>
							{subtitle}
						</Text>
					</View>
				)}
			</TouchableOpacity>
		);
	}
}
