import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import LinkButton from '../../LinkButton';
import { goToScreen } from '../../../config/navigation';
import styles, { slideWidth } from './styles';

const { width } = Dimensions.get('window');

class SingleCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slider1ActiveSlide: 0
		};
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
							onPress={this.goTo.bind(this, componentId, 'bookace.Search')}>
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
	books: PropTypes.array.isRequired
};

export default SingleCarousel;
