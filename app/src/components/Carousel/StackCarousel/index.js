import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import StackSlider from './StackSlider';
import { slideWidth } from './styles';

const { width } = Dimensions.get('window');

class StackCarousel extends Component {
	render() {
		const { books } = this.props;

		return (
			<Carousel
				data={books}
				renderItem={({ item }) => <StackSlider book={item} />}
				sliderWidth={width}
				itemWidth={slideWidth}
				layout="stack"
				layoutCardOffset={30}
				loop
			/>
		);
	}
}

StackCarousel.propTypes = {
	books: PropTypes.array.isRequired
};

export default StackCarousel;
