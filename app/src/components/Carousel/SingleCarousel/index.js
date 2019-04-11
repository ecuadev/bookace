import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import LinkButton from '../../../components/LinkButton';
import { goToScreen } from '../../../config/navigation';
import { sliderWidth, itemWidth } from './SliderEntry.styles';
import styles from './styles';

class SingleCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slider1ActiveSlide: 0,
		};
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

	goTo(componentId, screen) {
		goToScreen(componentId, screen);
	}

	render() {
		const { slider1ActiveSlide } = this.state;
		const { books, title, componentId } = this.props;

		return (
			<View style={styles.carouselContainer}>
				<View style={styles.header}>
					<View style={styles.headerTitle}>
						{title && <Text style={styles.title}>{title}</Text>}
					</View>
					<View style={styles.headerLink}>
						<LinkButton
							style={styles.link}
							onPress={this.goTo.bind(this, componentId, 'bookace.Search')}
						>
							View All
						</LinkButton>
					</View>
				</View>

				<Carousel
					activeSlideAlignment="start"
					data={books}
					renderItem={this._renderItemWithParallax}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
					hasParallaxImages
					firstItem={slider1ActiveSlide}
					containerCustomStyle={styles.slider}
					contentContainerCustomStyle={styles.sliderContentContainer}
				/>
			</View>
		);
	}
}

SingleCarousel.propTypes = {
	// eslint-disable-next-line react/require-default-props
	// eslint-disable-next-line react/no-unused-prop-types
	books: PropTypes.array.isRequired,
};

export default SingleCarousel;
