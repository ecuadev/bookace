import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import LinkButton from '../../../components/LinkButton';
import { sliderWidth, itemWidth } from './SliderEntry.styles';
import styles from './styles';

// const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;

class SingleCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slider1ActiveSlide: SLIDER_1_FIRST_ITEM
		};
	}

	_renderItemWithParallax({ item, index }, parallaxProps) {
		return (
			<SliderEntry
				data={item}
				even={(index + 1) % 2 === 0}
				parallax
				parallaxProps={parallaxProps}
			/>
		);
	}

	render() {
		const { slider1ActiveSlide } = this.state;
		const { books, title } = this.props;
		return (
			<View style={styles.carouselContainer}>
				<View style={styles.header}>
					<View style={styles.headerTitle}>
						{title && <Text style={styles.title}>{title}</Text>}
					</View>
					<View style={styles.headerLink}>
						{/* <Text style={styles.link}>View All</Text> */}
						<LinkButton style={styles.link}>View All</LinkButton>
					</View>
				</View>

				<Carousel
					activeSlideAlignment="start"
					data={books}
					renderItem={this._renderItemWithParallax}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
					hasParallaxImages
					firstItem={SLIDER_1_FIRST_ITEM}
					containerCustomStyle={styles.slider}
					contentContainerCustomStyle={styles.sliderContentContainer}
					// loop
					onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
				/>
			</View>
		);
	}
}

SingleCarousel.propTypes = {
	// eslint-disable-next-line react/require-default-props
	// eslint-disable-next-line react/no-unused-prop-types
	books: PropTypes.array.isRequired
};
// eslint-disable-next-line react/default-props-match-prop-types
SingleCarousel.defaultProps = { title: PropTypes.string };

export default SingleCarousel;
