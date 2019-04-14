import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import StackSlider from './StackSlider';
import styles, { slideWidth } from './styles';

const { width } = Dimensions.get('window');

class StackCarousel extends Component {
	render() {
		const { books, parentId } = this.props;

		return (
			<Carousel
				loop
				data={books}
				activeSlideAlignment="start"
				renderItem={({ item }) => <StackSlider book={item} parentId={parentId} />}
				sliderWidth={width}
				itemWidth={slideWidth}
				layout="stack"
				layoutCardOffset={(width - slideWidth - 40) / 2}
				containerCustomStyle={styles.sliderContainer}
			/>
		);
	}
}

StackCarousel.propTypes = {
	books: PropTypes.array.isRequired,
	parentId: PropTypes.string.isRequired,
};

export default StackCarousel;
