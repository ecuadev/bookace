import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import StackSlider from './StackSlider';
import { sliderWidth, itemWidth } from './StackSlider.styles';
import styles from './styles';

class StackCarousel extends Component {
	_renderItem({ item, index }) {
		return <StackSlider data={item} even={(index + 1) % 2 === 0} />;
	}

	render() {
		const { books, componentId } = this.props;

		return (
			<Carousel
				data={books}
				renderItem={this._renderItem}
				sliderWidth={sliderWidth}
				itemWidth={itemWidth}
				containerCustomStyle={styles.slider}
				contentContainerCustomStyle={styles.sliderContentContainer}
				layout="stack"
				layoutCardOffset={18}
				loop
			/>
		);
	}
}

StackCarousel.propTypes = {
	// eslint-disable-next-line react/require-default-props
	books: PropTypes.array.isRequired
};
// eslint-disable-next-line react/default-props-match-prop-types
StackCarousel.defaultProps = { title: PropTypes.string };

export default StackCarousel;
