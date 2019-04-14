import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import SliderEntry from './SliderEntry';
import LinkButton from '../../../components/LinkButton';
import styles, { slideWidth } from './styles';
import { setTab } from '../../../actions/activeTab';

const { width } = Dimensions.get('window');

class SingleCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slider1ActiveSlide: 0,
		};
	}

	_renderItemWithParallax({ item }, parallaxProps, parentId) {
		return <SliderEntry data={item} parentId={parentId} parallax parallaxProps={parallaxProps} />;
	}

	handleTabClick(newIndex, title) {
		const { setTab } = this.props;
		setTab(newIndex, title);
	}

	render() {
		const { slider1ActiveSlide } = this.state;
		const { books, title, parentId } = this.props;
		return (
			<View style={styles.carouselContainer}>
				<View style={styles.header}>
					<View style={styles.headerTitle}>
						{title && <Text style={styles.title}>{title}</Text>}
					</View>
					<View style={styles.headerLink}>
						<LinkButton style={styles.link} onPress={() => this.handleTabClick(1, title)}>
							View All
						</LinkButton>
					</View>
				</View>

				<Carousel
					loop
					activeSlideAlignment="start"
					data={books}
					renderItem={({ item }) => <SliderEntry data={item} parentId={parentId} />}
					sliderWidth={width}
					itemWidth={slideWidth}
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

	parentId: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
	setTab,
};
export default connect(
	null,
	mapDispatchToProps,
)(SingleCarousel);
