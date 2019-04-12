import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { goToBook, goToTab, goToCategory } from '../../../config/navigation';

class StackSlider extends Component {
	//
	onPressgoToBook() {
		const { componentId } = this.props;
		goToTab(1);
		// goToCategory()
	}

	render() {
		const { book, goToBook } = this.props;
		return (
			<TouchableOpacity
				activeOpacity={1}
				style={styles.slideInnerContainer}
				onPress={() => this.onPressgoToBook()}
			>
				<Image
					source={{
						uri:
							'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg'
					}}
					style={styles.image}
				/>
			</TouchableOpacity>
		);
	}
}

StackSlider.propTypes = {
	book: PropTypes.object.isRequired,
	goToBook: PropTypes.func
};

StackSlider.defaultProps = {
	goToBook: () => {}
};

export default StackSlider;
