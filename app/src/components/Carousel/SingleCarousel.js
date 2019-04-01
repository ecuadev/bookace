import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import { sliderWidth, itemWidth } from './SliderEntry.styles';
import styles, { colors } from './styles';

// const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 2;

class SingleCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
		};
	}

	_renderItem({ item, index }) {
		return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
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
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.container}>
					<ScrollView style={styles.scrollview} scrollEventThrottle={200} directionalLockEnabled>
						<View style={styles.exampleContainer}>
							{title && <Text style={styles.title}>{title}</Text>}

							<Carousel
								activeSlideAlignment="start"
								// eslint-disable-next-line no-return-assign
								ref={c => (this._slider1Ref = c)}
								data={books}
								renderItem={this._renderItemWithParallax}
								sliderWidth={sliderWidth}
								itemWidth={itemWidth}
								hasParallaxImages
								firstItem={SLIDER_1_FIRST_ITEM}
								inactiveSlideScale={0.9}
								inactiveSlideOpacity={0.7}
								// inactiveSlideShift={20}
								containerCustomStyle={styles.slider}
								contentContainerCustomStyle={styles.sliderContentContainer}
								loop
								loopClonesPerSide={2}
								// autoplay
								// autoplayDelay={500}
								// autoplayInterval={3000}
								onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
							/>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}

SingleCarousel.propTypes = {
	// eslint-disable-next-line react/require-default-props
	// eslint-disable-next-line react/no-unused-prop-types
	books: PropTypes.array.isRequired,
};
// eslint-disable-next-line react/default-props-match-prop-types
SingleCarousel.defaultProps = { title: PropTypes.string };

export default SingleCarousel;
