import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import LinkButton from '../../LinkButton';
import { goToTab, goToCategory } from '../../../config/navigation';
import styles, { slideWidth } from './styles';

const { width } = Dimensions.get('window');

class SingleCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slider1ActiveSlide: 0,
		};
	}

	_renderItemWithParallax({ item }, parallaxProps) {
		return <SliderEntry data={item} parallax parallaxProps={parallaxProps} />;
	}

	goTo() {
		const { title } = this.props;
		goToTab(1);
		goToCategory(title);
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
						<LinkButton style={styles.link} onPress={this.goTo.bind(this)}>
							{ 'View All' }
						</LinkButton>
					</View>
				</View>

				<Carousel
					loop
					activeSlideAlignment="start"
					data={books}
					renderItem={({ item }) => <SliderEntry data={item} />}
					sliderWidth={width}
					itemWidth={slideWidth}
					firstItem={slider1ActiveSlide}
					containerCustomStyle={styles.slider}
					inactiveSlideScale={1}
					inactiveSlideOpacity={1}
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
