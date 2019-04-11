import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import LinkButton from '../../LinkButton';
import { sliderWidth, itemWidth } from './SliderEntry.styles';
import styles from './styles';

class SingleCarousel extends Component {
	constructor(props) {
		super(props);
	}

	_renderItemWithParallax({ item }, parallaxProps) {
		return (
			<SliderEntry
				data={item}
				parallax
				parallaxProps={parallaxProps}
			/>
		);
	}

	render() {
		const { books, title } = this.props;
		return (
			<View style={styles.carouselContainer}>
				<View style={styles.header}>
					<Text style={styles.title}>{title}</Text>
					<LinkButton style={styles.link}>View All</LinkButton>
				</View>

				<Carousel
					activeSlideAlignment="start"
					data={books}
					renderItem={this._renderItemWithParallax}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
					hasParallaxImages
					firstItem={0}
					containerCustomStyle={styles.slider}
					contentContainerCustomStyle={styles.sliderContentContainer}
				/>
			</View>
		);
	}
}

SingleCarousel.propTypes = {
	title: PropTypes.string,
	books: PropTypes.array.isRequired
};

SingleCarousel.defaultProps = {
	title: ''
};

export default SingleCarousel;
