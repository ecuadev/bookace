import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import { sliderWidth, itemWidth } from './SliderEntry.styles';
import styles from './styles';

class StackCarousel extends Component {
	_renderItem({ item, index }) {
		return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
	}

	render() {
		const { books, title, componentId } = this.props;

		return (
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.container}>
					<ScrollView style={styles.scrollview} scrollEventThrottle={200} directionalLockEnabled>
						<View style={styles.exampleContainer}>
							{/* <Text style={[styles.title, styles.titleDark]}>{`Example ${number}`}</Text> */}
							<Text style={styles.title}>{title}</Text>
							<Carousel
								data={books}
								renderItem={this._renderItem}
								sliderWidth={sliderWidth}
								itemWidth={itemWidth}
								containerCustomStyle={styles.slider}
								contentContainerCustomStyle={styles.sliderContentContainer}
								layout="stack"
								// layoutCardOffset={`18`}
								loop
							/>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}

StackCarousel.propTypes = {
	// eslint-disable-next-line react/require-default-props
	books: PropTypes.array.isRequired,
};
// eslint-disable-next-line react/default-props-match-prop-types
StackCarousel.defaultProps = { title: PropTypes.string };

export default StackCarousel;
